const endpoint = process.argv[2] || 'http://127.0.0.1:9224';

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

async function getPage() {
  for (let attempt = 0; attempt < 20; attempt += 1) {
    try {
      const pages = await fetch(`${endpoint}/json/list`).then(response => response.json());
      const page = pages.find(item => item.type === 'page');
      if (page) return page;
    } catch {
      // Chrome may still be starting.
    }
    await delay(250);
  }
  throw new Error('Unable to connect to the Chrome DevTools endpoint.');
}

const page = await getPage();
const socket = new WebSocket(page.webSocketDebuggerUrl);
const pending = new Map();
let sequence = 0;

socket.addEventListener('message', event => {
  const message = JSON.parse(event.data);
  if (!message.id || !pending.has(message.id)) return;
  const { resolve, reject } = pending.get(message.id);
  pending.delete(message.id);
  if (message.error) reject(new Error(message.error.message));
  else resolve(message.result);
});

await new Promise((resolve, reject) => {
  socket.addEventListener('open', resolve, { once: true });
  socket.addEventListener('error', reject, { once: true });
});

function send(method, params = {}) {
  const id = ++sequence;
  socket.send(JSON.stringify({ id, method, params }));
  return new Promise((resolve, reject) => pending.set(id, { resolve, reject }));
}

async function evaluate(expression) {
  const result = await send('Runtime.evaluate', {
    expression,
    awaitPromise: true,
    returnByValue: true
  });
  if (result.exceptionDetails) throw new Error('Browser evaluation failed.');
  return result.result.value;
}

await send('Runtime.enable');
await delay(1200);

const home = await evaluate(`new Promise(resolve => {
  document.querySelector('.language-toggle').click();
  setTimeout(() => resolve({
    language: document.documentElement.lang,
    saved: localStorage.getItem('portfolio-language'),
    intro: document.querySelector('.home-title h3').textContent.trim(),
    navigation: [...document.querySelectorAll('#mySidenav a')].map(link => link.textContent.trim()),
    button: document.querySelector('.resume-button a').textContent.trim()
  }), 250);
})`);

await send('Page.enable');
await send('Page.navigate', { url: 'http://127.0.0.1:8766/projects?project=multiphase-flow' });
await delay(1500);

const project = await evaluate(`({
  language: document.documentElement.lang,
  title: document.querySelector('.hero-copy h1').textContent.trim(),
  metric: [...document.querySelectorAll('.metric')].map(item => item.textContent.replace(/\\s+/g, ' ').trim()),
  togglePresent: Boolean(document.querySelector('.project-language-toggle'))
})`);

const passed = home.language === 'zh-CN'
  && home.saved === 'zh'
  && home.navigation.includes('首页')
  && home.button.includes('查看简历')
  && project.language === 'zh-CN'
  && project.title === '计算多相流'
  && project.metric.some(item => item.includes('1.26 / 6.33') && item.includes('σ·Fr 分类指标'))
  && project.togglePresent;

console.log(JSON.stringify({ passed, home, project }, null, 2));
socket.close();
if (!passed) process.exitCode = 1;

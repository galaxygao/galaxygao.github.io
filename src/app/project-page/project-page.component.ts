import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { LanguageService } from '../language.service';

interface ProjectMetric {
  value: string;
  label: string;
  labelZh: string;
}

interface ProjectBlock {
  slug: string;
  title: string;
  titleZh: string;
  category: string;
  categoryZh: string;
  period: string;
  periodZh?: string;
  affiliation: string;
  affiliationZh: string;
  summary: string;
  summaryZh: string;
  image: string;
  imageAlt: string;
  imageAltZh: string;
  tools: string[];
  metrics: ProjectMetric[];
  description: string[];
  descriptionZh: string[];
}

@Component({
  selector: 'app-project-page',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.css']
})
export class ProjectPageComponent {
  public readonly projectBlocks: ProjectBlock[] = [
    {
      slug: 'data-driven-turbulence',
      title: 'Data-Driven Turbulence Research',
      titleZh: '数据驱动湍流研究',
      category: 'Turbulence · HPC',
      categoryZh: '湍流 · 高性能计算',
      period: '2026 – Present',
      periodZh: '2026–至今',
      affiliation: 'University of Pittsburgh',
      affiliationZh: '匹兹堡大学',
      summary: 'A scalable research workflow for investigating subfilter energy transfer in high-resolution isotropic turbulence.',
      summaryZh: '面向高分辨率各向同性湍流亚滤波尺度能量传递研究的可扩展科研流程。',
      image: 'assets/images/projects/data-driven-turbulence.png',
      imageAlt: 'Orthogonal slices of a turbulent subfilter-transfer field',
      imageAltZh: '湍流亚滤波尺度能量传递场的三向正交切片',
      tools: ['Python', 'JHTDB', 'Zarr', 'FFT', 'Streamlit', 'HPC'],
      metrics: [
        { value: '1024³', label: 'field resolution', labelZh: '流场分辨率' },
        { value: '5', label: 'filter scales', labelZh: '滤波尺度' },
        { value: '16', label: 'HPC workers', labelZh: '并行工作进程' }
      ],
      description: [
        'Built a resumable pipeline assembling full 1024³ JHTDB velocity fields from chunked requests, with checksum tiles, retry/backoff, and compressed Zarr output at 9.3 GB per frame.',
        'Ran slab-streamed FFT filtering and spectral derivatives at five scales on 16 workers, with a 92 GiB peak memory footprint.',
        'Derived subfilter-transfer fields over a six-regime partition and quantified forward transfer versus backscatter in each regime.',
        'Added quality gates for divergence, energy identity, and regime closure, plus a read-only Streamlit viewer.'
      ],
      descriptionZh: [
        '构建可恢复的数据管线，通过分块请求组装完整 1024³ JHTDB 速度场，并加入校验、重试与压缩 Zarr 输出；每帧约 9.3 GB。',
        '在 16 个工作进程上完成五个尺度的分层流式 FFT 滤波与谱导数计算，峰值内存为 92 GiB。',
        '推导六类流动状态下的亚滤波尺度能量传递场，并量化各类状态中的正向传递与反向散射。',
        '加入散度、能量恒等式与分类闭合的质量检查，并开发只读 Streamlit 可视化界面。'
      ]
    },
    {
      slug: 'physics-informed-transformer',
      title: 'Physics-Informed Transformer for 2D Navier–Stokes',
      titleZh: '二维 Navier–Stokes 物理信息 Transformer',
      category: 'Scientific ML · PDEs',
      categoryZh: '科学机器学习 · 偏微分方程',
      period: '2025',
      affiliation: 'University of Southern California · AME-505',
      affiliationZh: '南加州大学 · AME-505',
      summary: 'A Transformer surrogate that combines sparse flow observations with momentum, continuity, and boundary-condition constraints.',
      summaryZh: '融合稀疏流场观测、动量方程、连续性方程与边界条件约束的 Transformer 代理模型。',
      image: 'assets/images/projects/physics-informed-transformer.gif',
      imageAlt: 'Animated comparison of true and predicted velocity fields',
      imageAltZh: '真实速度场与预测速度场的动态对比',
      tools: ['PyTorch', 'Transformers', 'PDEBench', 'HDF5', 'CUDA'],
      metrics: [
        { value: '204,800', label: 'training samples', labelZh: '训练样本' },
        { value: '4', label: 'Transformer layers', labelZh: 'Transformer 层数' },
        { value: '~10 ms', label: 'inference time', labelZh: '推理时间' }
      ],
      description: [
        'Built a PDEBench data pipeline for 512 × 512 velocity and forcing fields, using 200 frames and 204,800 samples from 1,024 sensors.',
        'Reduced roughly 50 million space-time points to a stride-16 grid plus 4,096 random collocation points for training on one RTX 3090.',
        'Implemented a four-layer, four-head encoder-only Transformer with Fourier positional encoding and weighted data, momentum, continuity, and boundary-condition losses.',
        'Reached 0.03–0.06 relative L2 error at approximately 10 ms inference.'
      ],
      descriptionZh: [
        '构建 PDEBench 数据管线，处理 512 × 512 速度场与外力场，使用 200 帧数据和 1,024 个传感器生成 204,800 个样本。',
        '将约 5,000 万个时空点压缩为步长 16 的网格，并加入 4,096 个随机配点，使模型可在单张 RTX 3090 上训练。',
        '实现四层、四头的纯编码器 Transformer，结合 Fourier 位置编码以及数据、动量、连续性和边界条件加权损失。',
        '在约 10 ms 推理时间下达到 0.03–0.06 的 relative L2 误差。'
      ]
    },
    {
      slug: 'cell-biomechanics',
      title: 'Computational Cell Biomechanics',
      titleZh: '计算细胞生物力学',
      category: 'Finite Elements · Biomechanics',
      categoryZh: '有限元 · 生物力学',
      period: '2024 – Present',
      periodZh: '2024–至今',
      affiliation: 'Shanghai Jiao Tong University',
      affiliationZh: '上海交通大学',
      summary: 'Finite-element modeling of AFM indentation to connect cytoskeletal reorganization with measured neuronal-cell stiffness.',
      summaryZh: '通过 AFM 压痕有限元建模，研究细胞骨架重组与神经元细胞刚度变化之间的联系。',
      image: 'assets/images/projects/bio.png',
      imageAlt: 'Computational cell biomechanics model and measurements',
      imageAltZh: '细胞生物力学计算模型与实验测量',
      tools: ['Abaqus/CAE', 'Finite Elements', 'Neo-Hookean Model', 'AFM'],
      metrics: [
        { value: '2D', label: 'nonlinear FE model', labelZh: '非线性有限元模型' },
        { value: '4–14%', label: 'modulus decrease', labelZh: '模量下降' },
        { value: 'PNAS', label: 'under review', labelZh: '审稿中' }
      ],
      description: [
        'Built 2D Neo-Hookean finite-element models of AFM indentation in Abaqus/CAE with explicit actin, microtubules, and Aβ42 pores.',
        'Reproduced the measured 4–14% modulus decrease from simulated force-displacement curves.',
        'The resulting manuscript is under review at Proceedings of the National Academy of Sciences.'
      ],
      descriptionZh: [
        '在 Abaqus/CAE 中建立二维 Neo-Hookean AFM 压痕有限元模型，显式表示肌动蛋白、微管与 Aβ42 孔隙。',
        '通过模拟力–位移曲线复现实验测得的 4–14% 模量下降。',
        '相关论文目前正在《Proceedings of the National Academy of Sciences》审稿。'
      ]
    },
    {
      slug: 'multiphase-flow',
      title: 'Computational Multiphase Flow',
      titleZh: '计算多相流',
      category: 'CFD · Multiphase Flow',
      categoryZh: '计算流体力学 · 多相流',
      period: '2022 – 2023',
      affiliation: 'Shanghai Jiao Tong University',
      affiliationZh: '上海交通大学',
      summary: 'Three-phase CFD and analytical modeling of gas loss in the shear layer of ventilated supercavitating flows.',
      summaryZh: '针对通气超空泡流动开展三相 CFD 模拟，并建立剪切层气体损失解析模型。',
      image: 'assets/images/projects/pof_1.png',
      imageAlt: 'Computational multiphase-flow simulation of a ventilated supercavity',
      imageAltZh: '通气超空泡的计算多相流模拟',
      tools: ['ANSYS', 'Multifluid CFD', 'SST k–ω', 'Experimental Validation'],
      metrics: [
        { value: '3', label: 'fluid phases', labelZh: '流体相数' },
        { value: '1.26 / 6.33', label: 'σ·Fr regime index', labelZh: 'σ·Fr 分类指标' },
        { value: 'PoF', label: 'journal publication', labelZh: '期刊论文' }
      ],
      description: [
        'Ran gas-vapor-water multi-fluid CFD of ventilated supercavitating flows classified by σ·Fr = 1.26 and 6.33, distinguishing gravity-influenced and gravity-negligible regimes.',
        'Established radial distribution laws of velocity, volume fraction, and superficial velocity for all three phases.',
        'Derived a shear-layer gas-loss model and validated it against water-whirling-arm and water-tunnel experiments; published in Physics of Fluids.'
      ],
      descriptionZh: [
        '开展气体–蒸汽–水多流体 CFD 模拟，以 σ·Fr = 1.26 与 6.33 区分重力影响显著和可忽略的通气超空泡流动。',
        '建立三相速度、体积分数与表观速度的径向分布规律。',
        '推导剪切层气体损失模型，并通过水旋臂与水洞实验验证；成果发表于《Physics of Fluids》。'
      ]
    }
  ];

  public activeProject: ProjectBlock = this.projectBlocks[0];

  constructor(route: ActivatedRoute, public language: LanguageService) {
    route.queryParamMap.subscribe(params => {
      const requestedProject = params.get('project');
      this.activeProject = this.projectBlocks.find(project =>
        project.title === requestedProject || project.slug === requestedProject
      ) || this.projectBlocks[0];
    });
  }
}

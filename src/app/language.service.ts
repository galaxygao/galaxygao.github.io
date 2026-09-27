import { Injectable } from '@angular/core';

export type SiteLanguage = 'en' | 'zh';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private readonly storageKey = 'portfolio-language';
  private language: SiteLanguage = this.getInitialLanguage();

  constructor() {
    this.applyDocumentLanguage();
  }

  get currentLanguage(): SiteLanguage {
    return this.language;
  }

  get isChinese(): boolean {
    return this.language === 'zh';
  }

  toggle(): void {
    this.setLanguage(this.isChinese ? 'en' : 'zh');
  }

  setLanguage(language: SiteLanguage): void {
    this.language = language;
    try {
      localStorage.setItem(this.storageKey, language);
    } catch {
      // The language still changes for the current session when storage is unavailable.
    }
    this.applyDocumentLanguage();
  }

  pick<T>(english: T, chinese?: T): T {
    return this.isChinese && chinese !== undefined ? chinese : english;
  }

  private getInitialLanguage(): SiteLanguage {
    try {
      const savedLanguage = localStorage.getItem(this.storageKey);
      if (savedLanguage === 'en' || savedLanguage === 'zh') {
        return savedLanguage;
      }
    } catch {
      // Fall back to English when storage is unavailable.
    }
    return 'en';
  }

  private applyDocumentLanguage(): void {
    document.documentElement.lang = this.language === 'zh' ? 'zh-CN' : 'en';
  }
}

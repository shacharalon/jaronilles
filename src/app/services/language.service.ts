import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CONTENT_EN, SiteContent } from 'src/app/data/content.en';
import { CONTENT_DE } from 'src/app/data/content.de';

export type Lang = 'de' | 'en';

const STORAGE_KEY = 'site-lang';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private readonly texts: Record<Lang, SiteContent> = { de: CONTENT_DE, en: CONTENT_EN };

  readonly lang$ = new BehaviorSubject<Lang>(this.initialLang());

  get lang(): Lang {
    return this.lang$.value;
  }

  /** Texts of the currently selected language. */
  get content(): SiteContent {
    return this.texts[this.lang];
  }

  set(lang: Lang) {
    this.lang$.next(lang);
    document.documentElement.lang = lang;
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // storage may be unavailable (private mode); the choice then only lasts for this visit
    }
  }

  private initialLang(): Lang {
    let lang: Lang = 'de';
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === 'de' || stored === 'en') {
        lang = stored;
      }
    } catch {
      // ignore, keep the default
    }
    document.documentElement.lang = lang;
    return lang;
  }
}

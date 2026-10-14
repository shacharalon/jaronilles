import { Component } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {
  constructor(private language: LanguageService) {}

  get site() {
    return this.language.content;
  }

  private navCache?: object;
  private tilesCache: ({ link: string; icon: string; title: string } | null)[] = [];

  // 3 columns, 3 rows; null = empty space. Same array until the language changes
  // (a new array every cycle would make ngFor rebuild forever).
  get tiles() {
    const nav = this.language.content.nav;
    if (nav !== this.navCache) {
      this.navCache = nav;
      this.tilesCache = [
        { link: '/about', icon: 'fa-user', title: nav.about },
        { link: '/profession', icon: 'fa-briefcase', title: nav.profession },
        { link: '/recipe-of-the-month', icon: 'fa-bowl-food', title: nav.recipe },
        { link: '/ai-and-me', icon: 'fa-robot', title: nav.ai },
        { link: '/smart-factory', icon: 'fa-industry', title: nav.smartFactory },
        { link: '/technology', icon: 'fa-microchip', title: nav.technology },
        { link: '/hobbies', icon: 'fa-sailboat', title: nav.hobbies },
        null,
        { link: '/history', icon: 'fa-clock-rotate-left', title: nav.history }
      ];
    }
    return this.tilesCache;
  }
}

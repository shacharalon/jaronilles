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

  get tiles() {
    const nav = this.language.content.nav;
    return [
      { link: '/about', icon: 'fa-user', title: nav.about },
      { link: '/smart-factory', icon: 'fa-industry', title: nav.smartFactory },
      { link: '/technology', icon: 'fa-microchip', title: nav.technology },
      { link: '/ai-and-me', icon: 'fa-robot', title: nav.ai },
      { link: '/recipe-of-the-month', icon: 'fa-bowl-food', title: nav.recipe },
      { link: '/history', icon: 'fa-clock-rotate-left', title: nav.history },
      { link: '/hobbies', icon: 'fa-sailboat', title: nav.hobbies }
    ];
  }
}

import { Component } from '@angular/core';
import { Lang, LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  languages: { code: Lang; label: string }[] = [
    { code: 'de', label: 'DE' },
    { code: 'en', label: 'EN' }
  ];

  constructor(public language: LanguageService) {}

  get owner() {
    return this.language.content.owner;
  }

  get tabs() {
    const nav = this.language.content.nav;
    return [
      { link: '/', label: nav.main, icon: 'fa-house', exact: true },
      { link: '/about', label: nav.about, icon: 'fa-user', exact: false },
      { link: '/smart-factory', label: nav.smartFactory, icon: 'fa-industry', exact: false },
      { link: '/technology', label: nav.technology, icon: 'fa-microchip', exact: false },
      { link: '/ai-and-me', label: nav.ai, icon: 'fa-robot', exact: false },
      { link: '/recipe-of-the-month', label: nav.recipe, icon: 'fa-bowl-food', exact: false },
      { link: '/history', label: nav.history, icon: 'fa-clock-rotate-left', exact: false },
      { link: '/hobbies', label: nav.hobbies, icon: 'fa-sailboat', exact: false }
    ];
  }
}

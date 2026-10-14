import { Component } from '@angular/core';
import { SITE_CONTENT } from 'src/app/data/site-content';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {
  site = SITE_CONTENT;

  tiles = [
    { link: '/about', icon: 'fa-user', title: 'About me' },
    { link: '/technology', icon: 'fa-microchip', title: 'Technology of the month' },
    { link: '/recipe-of-the-month', icon: 'fa-bowl-food', title: 'Recipe of the month' },
    { link: '/hobbies', icon: 'fa-guitar', title: 'Hobbies' },
    { link: '/cookbook', icon: 'fa-book-open', title: 'Cookbook' }
  ];
}

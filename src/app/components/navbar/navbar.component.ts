import { Component } from '@angular/core';
import { SITE_CONTENT } from 'src/app/data/site-content';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  owner = SITE_CONTENT.owner;

  tabs = [
    { link: '/', label: 'Main', icon: 'fa-house', exact: true },
    { link: '/about', label: 'About me', icon: 'fa-user', exact: false },
    { link: '/technology', label: 'Technology of the month', icon: 'fa-microchip', exact: false },
    { link: '/recipe-of-the-month', label: 'Recipe of the month', icon: 'fa-bowl-food', exact: false },
    { link: '/hobbies', label: 'Hobbies', icon: 'fa-guitar', exact: false },
    { link: '/cookbook', label: 'Cookbook', icon: 'fa-book-open', exact: false }
  ];
}

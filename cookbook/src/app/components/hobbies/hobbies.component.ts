import { Component } from '@angular/core';
import { SITE_CONTENT } from 'src/app/data/site-content';

@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html'
})
export class HobbiesComponent {
  hobbies = SITE_CONTENT.hobbies;
}

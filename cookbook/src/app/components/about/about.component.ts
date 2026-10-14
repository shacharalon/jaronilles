import { Component } from '@angular/core';
import { SITE_CONTENT } from 'src/app/data/site-content';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html'
})
export class AboutComponent {
  about = SITE_CONTENT.about;
}

import { Component } from '@angular/core';
import { SITE_CONTENT } from 'src/app/data/site-content';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html'
})
export class TechnologyComponent {
  tech = SITE_CONTENT.technologyOfTheMonth;
}

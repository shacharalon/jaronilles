import { Component } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html'
})
export class TechnologyComponent {
  constructor(private language: LanguageService) {}

  get title() {
    return this.language.content.nav.technology;
  }

  get tech() {
    return this.language.content.technologyOfTheMonth;
  }

  get ui() {
    return this.language.content.ui;
  }
}

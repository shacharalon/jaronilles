import { Component } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-profession',
  templateUrl: './profession.component.html'
})
export class ProfessionComponent {
  /** Index of the topic button that is currently open. */
  selected = 0;

  constructor(private language: LanguageService) {}

  get title() {
    return this.language.content.nav.profession;
  }

  get role() {
    return this.language.content.about.role;
  }

  get profession() {
    return this.language.content.profession;
  }

  get current() {
    return this.profession.items[this.selected];
  }
}

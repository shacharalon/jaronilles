import { Component } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-profession',
  templateUrl: './profession.component.html'
})
export class ProfessionComponent {
  view: 'career' | 'roles' | 'certifications' = 'career';

  constructor(private language: LanguageService) {}

  get title() {
    return this.language.content.nav.profession;
  }

  get profession() {
    return this.language.content.profession;
  }
}

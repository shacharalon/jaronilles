import { Component } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html'
})
export class AboutComponent {
  constructor(private language: LanguageService) {}

  get title() {
    return this.language.content.nav.about;
  }

  get about() {
    return this.language.content.about;
  }

  get pm() {
    return this.language.content.projectManagement;
  }
}

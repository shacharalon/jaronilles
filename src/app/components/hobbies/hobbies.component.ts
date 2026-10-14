import { Component } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html'
})
export class HobbiesComponent {
  constructor(private language: LanguageService) {}

  get title() {
    return this.language.content.nav.hobbies;
  }

  get hobbies() {
    return this.language.content.hobbies;
  }
}

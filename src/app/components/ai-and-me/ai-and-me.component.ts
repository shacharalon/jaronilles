import { Component } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-ai-and-me',
  templateUrl: './ai-and-me.component.html'
})
export class AiAndMeComponent {
  constructor(private language: LanguageService) {}

  get title() {
    return this.language.content.nav.ai;
  }

  get ai() {
    return this.language.content.aiAndMe;
  }
}

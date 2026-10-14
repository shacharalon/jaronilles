import { Component } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html'
})
export class HistoryComponent {
  view: 'recipes' | 'technology' = 'recipes';

  constructor(private language: LanguageService) {}

  get title() {
    return this.language.content.nav.history;
  }

  get history() {
    return this.language.content.history;
  }

  get entries() {
    return this.history[this.view];
  }
}

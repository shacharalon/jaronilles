import { Component } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-smart-factory',
  templateUrl: './smart-factory.component.html'
})
export class SmartFactoryComponent {
  constructor(private language: LanguageService) {}

  get title() {
    return this.language.content.nav.smartFactory;
  }

  get factory() {
    return this.language.content.smartFactory;
  }

  get ui() {
    return this.language.content.ui;
  }
}

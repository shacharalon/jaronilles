import { Component } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-next-hike',
  templateUrl: './next-hike.component.html'
})
export class NextHikeComponent {
  constructor(private language: LanguageService) {}

  get title() {
    return this.language.content.nav.nextHike;
  }

  get hike() {
    return this.language.content.nextHike;
  }

  get ui() {
    return this.language.content.ui;
  }
}

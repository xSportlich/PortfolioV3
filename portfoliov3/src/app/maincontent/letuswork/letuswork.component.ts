import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-letuswork',
  standalone: true,
  imports: [
    TranslateModule
  ],
  templateUrl: './letuswork.component.html',
  styleUrl: './letuswork.component.scss'
})
export class LetusworkComponent {
  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('en');
  }
}

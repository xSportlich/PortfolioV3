import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-startsite',
  standalone: true,
  imports: [
    TranslateModule
  ],
  templateUrl: './startsite.component.html',
  styleUrl: './startsite.component.scss'
})
export class StartsiteComponent {
  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('en');
  }
  

  switchLanguegs(language: string) {
    this.translate.use(language)
  }
}

import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { HeaderComponent } from '../../header/header.component';

@Component({
  selector: 'app-startsite',
  standalone: true,
  imports: [
    TranslateModule,
    HeaderComponent
  ],
  templateUrl: './startsite.component.html',
  styleUrl: './startsite.component.scss'
})
export class StartsiteComponent {

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('en');
  }


  switchLanguegs(language: string) {

    let english: any = document.getElementById('english');
    let german: any = document.getElementById('german');


    this.translate.use(language);

    if (language == 'en') {
      english.classList.add('point');
    } else {
      english.classList.remove('point');
    } if (language == 'de') {
      german.classList.add('point');
    } else {
      german.classList.remove('point');
    }
  }
}

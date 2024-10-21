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

  //  english: any = document.getElementById('english');
  //  german: any = document.getElementById('german');


  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('en');
  }


  switchLanguegs(language: string) {

    let english: any = document.getElementById('english');
    let german: any = document.getElementById('german');


    this.translate.use(language);

    // if (language == 'en') {
    //   this.english.classList.add('point');
    //   console.log('en');
    // } else {
    //   this.english.classList.remove('point');
    // } if (language == 'de') {
    //   this.german.classList.add('point');
    //   console.log('en');
    // } else {
    //   this.german.classList.remove('point');
    // }

    if (language == 'en') {
      english.classList.add('point');
      console.log('en');
    } else {
      english.classList.remove('point');
    } if (language == 'de') {
      german.classList.add('point');
      console.log('en');
    } else {
      german.classList.remove('point');
    }
  }
}

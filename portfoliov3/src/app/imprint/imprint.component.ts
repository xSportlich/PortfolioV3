import { Component } from '@angular/core';
import { FooterComponent } from '../shared/footer/footer.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [
    FooterComponent,
    TranslateModule
  ],
  templateUrl: './imprint.component.html',
  styleUrls: ['./imprint.component.scss', '../shared/footer/footer.component.scss']

})
export class ImprintComponent {
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

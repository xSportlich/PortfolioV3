import { Component } from '@angular/core';
import { IconsComponent } from './icons/icons.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-myskills',
  standalone: true,
  imports: [
    IconsComponent,
    TranslateModule
  ],
  templateUrl: './myskills.component.html',
  styleUrl: './myskills.component.scss'
})
export class MyskillsComponent {
  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('en');
  }
}

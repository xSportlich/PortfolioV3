import { CommonModule } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { WhyMeComponent } from '../maincontent/why-me/why-me.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    TranslateModule,
    CommonModule,
    WhyMeComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('en');    
  }

  openBurgerMenu() {
    document.getElementById('burger_menu')?.classList.toggle('responsov_menu');
  }

  switchLanguegs(language: string) {
    this.translate.use(language);
  }
}
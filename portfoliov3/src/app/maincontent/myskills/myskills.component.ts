import { AfterViewInit, Component } from '@angular/core';
import { IconsComponent } from './icons/icons.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { HeaderComponent } from '../../header/header.component';

@Component({
  selector: 'app-myskills',
  standalone: true,
  imports: [
    IconsComponent,
    TranslateModule,
    HeaderComponent
  ],
  templateUrl: './myskills.component.html',
  styleUrl: './myskills.component.scss'
})
export class MyskillsComponent implements AfterViewInit {
  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('en');
  }

  ngAfterViewInit() {
    this.cangeColor(); 
  }

  cangeColor() {
    let contact: any = document.getElementById('myskills');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          contact.classList.add('white');
        } else {
          contact.classList.remove('white');
        }
      });
    });
    
    const hiddenElements = document.querySelectorAll('.target2');
    hiddenElements.forEach((el) => observer.observe(el));
  }
}

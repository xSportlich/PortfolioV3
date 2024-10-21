import { CommonModule } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { HeaderComponent } from '../../header/header.component';

@Component({
  selector: 'app-why-me',
  standalone: true,
  imports: [
    TranslateModule,
    HeaderComponent
  ],
  templateUrl: './why-me.component.html',
  styleUrl: './why-me.component.scss'
})
export class WhyMeComponent implements AfterViewInit {
  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('en');
  }

  ngAfterViewInit() {
    this.cangeColor(); 
  }

  cangeColor() {
    let contact: any = document.getElementById('whyme2');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          contact.classList.add('white');
        } else {
          contact.classList.remove('white');
          
        }
      });
    });
    
    const hiddenElements = document.querySelectorAll('.target1');
    hiddenElements.forEach((el) => observer.observe(el));
  }
}

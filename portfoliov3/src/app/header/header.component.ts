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
export class HeaderComponent implements AfterViewInit {
  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('en');
  }


  openBurgerMenu() {
    document.getElementById('burger_menu')?.classList.toggle('responsov_menu');
  }

  switchLanguegs(language: string) {
    this.translate.use(language)
  }

  ngAfterViewInit() {
    // this.cangeColor(); 
  }

  // cangeColor() {
  //   let contact: any = document.getElementById('contant');
  //   const observer = new IntersectionObserver((entries) => {
  //     entries.forEach((entry) => {
  //       if (entry.isIntersecting) {
  //         console.log('its work');
  //         // entry.target.classList.add('white') 
  //         // contact.classList.add('white');
  //       } else {
  //         // entry.target.classList.remove('white');
  //         // contact.classList.add('white');
  //         console.log('no white');
          
  //       }
  //     });
  //   });
  //   console.log(observer);
    
  
  //   const hiddenElements = document.querySelectorAll('.target');
  //   hiddenElements.forEach((el) => observer.observe(el));
  // }


}
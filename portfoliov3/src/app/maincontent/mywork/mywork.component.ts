import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule,  TranslateService } from "@ngx-translate/core";
import { ProjectsComponent } from './projects/projects.component';

@Component({
  selector: 'app-mywork',
  standalone: true,
  imports: [
    ProjectsComponent,
    CommonModule,
    TranslateModule 
  ],
  templateUrl: './mywork.component.html',
  styleUrl: './mywork.component.scss'
})
export class MyworkComponent implements AfterViewInit {

  constructor(private translate: TranslateService) {
    // You can now use the injected service safely
    this.translate.setDefaultLang('en');
  }


  ngAfterViewInit() {
    this.animationx(); 
  }

  animationx() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    });
  
    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));
  }
}


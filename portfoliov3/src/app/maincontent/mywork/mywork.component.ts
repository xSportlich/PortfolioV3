import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule,  TranslateService } from "@ngx-translate/core";
import { ProjectsComponent } from './projects/projects.component';
import { HeaderComponent } from '../../header/header.component';

@Component({
  selector: 'app-mywork',
  standalone: true,
  imports: [
    ProjectsComponent,
    CommonModule,
    TranslateModule,
    HeaderComponent
  ],
  templateUrl: './mywork.component.html',
  styleUrl: './mywork.component.scss'
})
export class MyworkComponent implements AfterViewInit {

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('en');
  }


  ngAfterViewInit() {
    this.cangeColor(); 
  }

  cangeColor() {
    let contact: any = document.getElementById('work');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          contact.classList.add('white');
        } else {
          contact.classList.remove('white');
        }
      });
    });
    
    const hiddenElements = document.querySelectorAll('.target3');
    hiddenElements.forEach((el) => observer.observe(el));
  }
}


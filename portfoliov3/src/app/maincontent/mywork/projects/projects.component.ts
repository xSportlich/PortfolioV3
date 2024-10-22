

import { CommonModule } from '@angular/common';
import { Component, AfterViewInit, OnInit } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    TranslateModule,
    CommonModule
  ],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit, AfterViewInit {

  translatedComments: any[] = [];

  constructor(private translate: TranslateService) {}

  ngOnInit() {
    this.translate.onLangChange.subscribe(() => {
      this.translateComments();
    });
  
    this.translateComments();
  }

  ngAfterViewInit() {
    this.translateComments().then(() => {
      setTimeout(() => {
        this.animationx();
      }, 0);
    });
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

  projects = [
    {
      number: 1,
      name: 'Join',
      aboutTheProject: 'myWork.text1-Project1',
      TechnologiesIHaveUsed: 'Javascript, HTML, CSS, Firebase, GIT',
      WhatIHaveLearned: 'myWork.text3-Project1',
      img: 'assets/img/Property 1=Jon Hover.png',
      liveTest: '',
      gitHub: 'https://github.com/Sanorea/Join'
    },
    {
      number: 2,
      name: 'Mafia 5',
      aboutTheProject: 'myWork2.text1-Project1',
      TechnologiesIHaveUsed: 'Javascript, HTML, CSS',
      WhatIHaveLearned: 'myWork2.text3-Project1',
      img: 'assets/img/mafia.png',
      liveTest: 'https://f01602cb@eduard-kammerzel.developerakademie.net/Gangaster-game/index.html',
      gitHub: 'https://github.com/xSportlich/Gangster-Game'
    }
  ];

  trackComment(index: number, comment: any) {
    return comment.name; 
  }

  async translateComments() {
    const translationPromises = this.projects.map(async (comment) => {
      try {
        const translatedAboutTheProject = await this.translate.get(comment.aboutTheProject).toPromise();
        const translatedTechnologies = await this.translate.get(comment.TechnologiesIHaveUsed).toPromise();
        const translatedLearned = await this.translate.get(comment.WhatIHaveLearned).toPromise();

        return { 
          ...comment, 
          text: translatedAboutTheProject,
          technologies: translatedTechnologies,
          learned: translatedLearned
        };
      } catch (err) {
        return { 
          ...comment, 
          text: comment.aboutTheProject, 
          technologies: comment.TechnologiesIHaveUsed, 
          learned: comment.WhatIHaveLearned
        };
      }
    });

    this.translatedComments = await Promise.all(translationPromises);
  }
}



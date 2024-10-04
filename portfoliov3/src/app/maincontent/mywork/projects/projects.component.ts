// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-projects',
//   standalone: true,
//   imports: [],
//   templateUrl: './projects.component.html',
//   styleUrl: './projects.component.scss'
// })
// export class ProjectsComponent {

//   constructor() {
//   }


//   projects = [
//     {
//       number: 1,
//       name: 'Join',
//       aboutTheProject: 'Task manager inspired by the Kanban System. Create and Organize tasks using drag and drop functions, assign users and categories.',
//       TechnologiesIHaveUsed: 'Javascript, HTML, CSS, Firebase, GIT',
//       WhatIHaveLearned: 'I learned a variety of skills. My JavaScript knowledge was tested in combination with Firebase, which gave me a whole new understanding of how programming works. Additionally, I learned to organize myself within a team and take responsibility for deadlines.',
//       img: '../../../../assets/img/Property 1=Jon Hover.png',
//       liveTest: '',
//       gitHub: 'https://github.com/Sanorea/Join'
//     },
//     {
//       number: 2,
//       name: 'Mafia 5',
//       aboutTheProject: 'Mafia 5 is a Jump, Run and Shoot Game. Help Fernando find and eliminate the criminal San Davis.',
//       TechnologiesIHaveUsed: 'Javascript, HTML, CSS',
//       WhatIHaveLearned: 'The focus in Mafia 5 is Object-oriented with class-based programming to to develop a well-designed game with complex tasks such as collision detection.',
//       img: '../../../../assets/img/mafia.png',
//       liveTest: 'https://f01602cb@eduard-kammerzel.developerakademie.net/Gangaster-game/index.html',
//       gitHub: 'https://github.com/xSportlich/Gangster-Game'
//     },
//   ];
// }

// import { CommonModule } from '@angular/common';
// import { Component, AfterViewInit, OnInit } from '@angular/core';
// import { TranslateModule, TranslateService } from '@ngx-translate/core';

// @Component({
//   selector: 'app-projects',
//   standalone: true,
//   imports: [
//     TranslateModule,
//     CommonModule
//   ],
//   templateUrl: './projects.component.html',
//   styleUrls: ['./projects.component.scss'],
// })
// export class ProjectsComponent implements OnInit, AfterViewInit {

//   translatedComments: any[] = [];

//   constructor(private translate: TranslateService) {}

//   ngOnInit() {
//     this.translate.onLangChange.subscribe(() => {
//       // Call translateComments() when the language is changed or initialized
//       this.translateComments();
//     });
  
//     // You can also directly call it in ngOnInit if you know the language is loaded
//     this.translateComments();
//   }

//   ngAfterViewInit() {
//     this.translateComments().then(() => {
//       setTimeout(() => {
//         this.animationx(); // Delay to ensure DOM elements are fully loaded
//       }, 0);
//     });
//   }

//   animationx() {
//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add('show');
//         } else {
//           entry.target.classList.remove('show');
//         }
//       });
//     });
  
//     const hiddenElements = document.querySelectorAll('.hidden');
//     hiddenElements.forEach((el) => observer.observe(el));
//   }

//   projects = [
//         {
//           number: 1,
//           name: 'Join',
//           aboutTheProject: 'myWork.text1-Project1',
//           TechnologiesIHaveUsed: 'Javascript, HTML, CSS, Firebase, GIT',
//           WhatIHaveLearned: 'I learned a variety of skills. My JavaScript knowledge was tested in combination with Firebase, which gave me a whole new understanding of how programming works. Additionally, I learned to organize myself within a team and take responsibility for deadlines.',
//           img: '../../../../assets/img/Property 1=Jon Hover.png',
//           liveTest: '',
//           gitHub: 'https://github.com/Sanorea/Join'
//         },
//         {
//           number: 2,
//           name: 'Mafia 5',
//           aboutTheProject: 'Mafia 5 is a Jump, Run and Shoot Game. Help Fernando find and eliminate the criminal San Davis.',
//           TechnologiesIHaveUsed: 'Javascript, HTML, CSS',
//           WhatIHaveLearned: 'The focus in Mafia 5 is Object-oriented with class-based programming to to develop a well-designed game with complex tasks such as collision detection.',
//           img: '../../../../assets/img/mafia.png',
//           liveTest: 'https://f01602cb@eduard-kammerzel.developerakademie.net/Gangaster-game/index.html',
//           gitHub: 'https://github.com/xSportlich/Gangster-Game'
//         },
//       ];


//   // Define the trackComment function here
//   trackComment(index: number, comment: any) {
//     return comment.name; // or you can use comment.project if it's unique
//   }

//   translateComments() {
  
//     const translationPromises = this.projects.map(comment => {
//       return this.translate.get(comment.aboutTheProject).toPromise().then((translatedText: string) => {
//         return { ...comment, text: translatedText };
//       }).catch(err => {
//         return { ...comment, text: comment.aboutTheProject }; // Fallback to original text if error
//       });
//     });
  
//     return Promise.all(translationPromises).then(translatedComments => {
//       this.translatedComments = translatedComments;
//     });
//   }
// }

// import { CommonModule } from '@angular/common';
// import { Component, AfterViewInit, OnInit } from '@angular/core';
// import { TranslateModule, TranslateService } from '@ngx-translate/core';

// @Component({
//   selector: 'app-projects',
//   standalone: true,
//   imports: [
//     TranslateModule,
//     CommonModule
//   ],
//   templateUrl: './projects.component.html',
//   styleUrls: ['./projects.component.scss'],
// })
// export class ProjectsComponent implements OnInit, AfterViewInit {

//   translatedComments: any[] = [];

//   constructor(private translate: TranslateService) {}

//   ngOnInit() {
//     this.translate.onLangChange.subscribe(() => {
//       // Call translateComments() when the language is changed or initialized
//       this.translateComments();
//     });
  
//     // You can also directly call it in ngOnInit if you know the language is loaded
//     this.translateComments();
//   }

//   ngAfterViewInit() {
//     this.translateComments().then(() => {
//       setTimeout(() => {
//         this.animationx(); // Delay to ensure DOM elements are fully loaded
//       }, 0);
//     });
//   }

//   animationx() {
//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add('show');
//         } else {
//           entry.target.classList.remove('show');
//         }
//       });
//     });
  
//     const hiddenElements = document.querySelectorAll('.hidden');
//     hiddenElements.forEach((el) => observer.observe(el));
//   }

//   // projects = [
//   //   {
//   //     number: 1,
//   //     name: 'Join',
//   //     aboutTheProject: 'myWork.text1-Project1',
//   //     TechnologiesIHaveUsed: 'Javascript, HTML, CSS, Firebase, GIT',
//   //     WhatIHaveLearned: 'I learned a variety of skills. My JavaScript knowledge was tested in combination with Firebase, which gave me a whole new understanding of how programming works. Additionally, I learned to organize myself within a team and take responsibility for deadlines.',
//   //     img: '../../../../assets/img/Property 1=Jon Hover.png',
//   //     liveTest: '',
//   //     gitHub: 'https://github.com/Sanorea/Join'
//   //   },
//   //   {
//   //     number: 2,
//   //     name: 'Mafia 5',
//   //     aboutTheProject: 'Mafia 5 is a Jump, Run and Shoot Game. Help Fernando find and eliminate the criminal San Davis.',
//   //     TechnologiesIHaveUsed: 'Javascript, HTML, CSS',
//   //     WhatIHaveLearned: 'The focus in Mafia 5 is Object-oriented with class-based programming to to develop a well-designed game with complex tasks such as collision detection.',
//   //     img: '../../../../assets/img/mafia.png',
//   //     liveTest: 'https://f01602cb@eduard-kammerzel.developerakademie.net/Gangaster-game/index.html',
//   //     gitHub: 'https://github.com/xSportlich/Gangster-Game'
//   //   }
//   // ];

//   projects = [
//     {
//       number: 1,
//       name: 'Join',
//       aboutTheProject: 'myWork.text1-Project1',
//       TechnologiesIHaveUsed: 'myWork.technologies1',
//       WhatIHaveLearned: 'myWork.learned1',
//       img: '../../../../assets/img/Property 1=Jon Hover.png',
//       liveTest: '',
//       gitHub: 'https://github.com/Sanorea/Join'
//     },
//     {
//       number: 2,
//       name: 'Mafia 5',
//       aboutTheProject: 'myWork.text2-Project2',
//       TechnologiesIHaveUsed: 'myWork.technologies2',
//       WhatIHaveLearned: 'myWork.learned2',
//       img: '../../../../assets/img/mafia.png',
//       liveTest: 'https://f01602cb@eduard-kammerzel.developerakademie.net/Gangaster-game/index.html',
//       gitHub: 'https://github.com/xSportlich/Gangster-Game'
//     }
//   ];

//   // Define the trackComment function here
//   trackComment(index: number, comment: any) {
//     return comment.name; // or you can use comment.project if it's unique
//   }

//   // Translate comments (using async/await for better readability)
//   async translateComments() {
//     const translationPromises = this.projects.map(async (comment) => {
//       try {
//         const translatedText = await this.translate.get(comment.aboutTheProject).toPromise();
//         return { ...comment, text: translatedText };
//       } catch (err) {
//         return { ...comment, text: comment.aboutTheProject }; // Fallback to original text if error
//       }
//     });

//     this.translatedComments = await Promise.all(translationPromises);
//   }
// }

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
      // Call translateComments() when the language is changed or initialized
      this.translateComments();
    });
  
    // You can also directly call it in ngOnInit if you know the language is loaded
    this.translateComments();
  }

  ngAfterViewInit() {
    this.translateComments().then(() => {
      setTimeout(() => {
        this.animationx(); // Delay to ensure DOM elements are fully loaded
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
      img: '../../../../assets/img/Property 1=Jon Hover.png',
      liveTest: '',
      gitHub: 'https://github.com/Sanorea/Join'
    },
    {
      number: 2,
      name: 'Mafia 5',
      aboutTheProject: 'myWork2.text1-Project1',
      TechnologiesIHaveUsed: 'Javascript, HTML, CSS',
      WhatIHaveLearned: 'myWork2.text3-Project1',
      img: '../../../../assets/img/mafia.png',
      liveTest: 'https://f01602cb@eduard-kammerzel.developerakademie.net/Gangaster-game/index.html',
      gitHub: 'https://github.com/xSportlich/Gangster-Game'
    }
  ];

  // Define the trackComment function here
  trackComment(index: number, comment: any) {
    return comment.name; // or you can use comment.project if it's unique
  }

  // Translate comments (using async/await for better readability)
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
          text: comment.aboutTheProject, // Fallback to original text if error
          technologies: comment.TechnologiesIHaveUsed, 
          learned: comment.WhatIHaveLearned
        };
      }
    });

    this.translatedComments = await Promise.all(translationPromises);
  }
}



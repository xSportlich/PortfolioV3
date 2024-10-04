// import { Component, AfterViewInit } from '@angular/core';
// import { TranslateModule, TranslateService } from '@ngx-translate/core';

// @Component({
//   selector: 'app-comments',
//   standalone: true,
//   imports:[TranslateModule],
//   templateUrl: './comments.component.html',
//   styleUrl: './comments.component.scss'
// })
// export class CommentsComponent implements AfterViewInit{

//   translatedComments: any[] = [];

//   constructor(private translate: TranslateService) {
//     this.translateComments();
//   }

//   ngAfterViewInit() {
//     this.animationx(); // Call the function here after the view is initialized

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
// comments = [
// {
//   text: "‘‘{{'reference.text1' | translate}}’’",
//   name: 'Rugman',
//   project: 'Project Join',
// },
// {
//   text: "‘‘{{'reference.text2' | translate}}’’",
//   name: 'Rugman',
//   project: 'Project Join',
// },
// {
//   text: "‘‘{{'reference.text3' | translate}}’’",
//   name: 'Rugman',
//   project: 'Project Join',
// },

// ];


// translateComments() {
//   this.comments.forEach(comment => {
//     this.translate.get(comment.text.replace(/[‘‘’’]/g, '')).subscribe((translatedText: string) => {
//       this.translatedComments.push({
//         ...comment,
//         text: translatedText
//       });
//     });
//   });
// }
// }


import { CommonModule } from '@angular/common';
import { Component, AfterViewInit } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [TranslateModule,
    CommonModule
  ],
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'], // Corrected to styleUrls
})
export class CommentsComponent implements AfterViewInit {

  translatedComments: any[] = [];

  constructor(private translate: TranslateService) {}

  ngAfterViewInit() {
    this.translateComments(); // Moved here, after the view is initialized
    this.animationx(); // Call the animation function after translation
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

  comments = [
    {
      text: 'reference.text1', // Remove template translation syntax
      name: 'Rugman',
      project: 'Project Join',
    },
    {
      text: 'reference.text2',
      name: 'Rugman',
      project: 'Project Join',
    },
    {
      text: 'reference.text3',
      name: 'Rugman',
      project: 'Project Join',
    },
  ];

  translateComments() {
    this.comments.forEach(comment => {
      this.translate.get(comment.text).subscribe((translatedText: string) => {
        this.translatedComments.push({
          ...comment,
          text: translatedText // Use translated text
        });
      });
    });
  }
}


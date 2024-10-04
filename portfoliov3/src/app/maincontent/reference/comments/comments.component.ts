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


// import { CommonModule } from '@angular/common';
// import { Component, AfterViewInit } from '@angular/core';
// import { TranslateModule, TranslateService } from '@ngx-translate/core';

// @Component({
//   selector: 'app-comments',
//   standalone: true,
//   imports: [TranslateModule,
//     CommonModule
//   ],
//   templateUrl: './comments.component.html',
//   styleUrls: ['./comments.component.scss'], // Corrected to styleUrls
// })
// export class CommentsComponent implements AfterViewInit {

//   translatedComments: any[] = [];

//   constructor(private translate: TranslateService) {}

//   ngAfterViewInit() {
//     this.translateComments(); // Moved here, after the view is initialized
//     this.animationx(); // Call the animation function after translation
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

//   comments = [
//     {
//       text: 'reference.text1', // Remove template translation syntax
//       name: 'Rugman',
//       project: 'Project Join',
//     },
//     {
//       text: 'reference.text2',
//       name: 'Rugman',
//       project: 'Project Join',
//     },
//     {
//       text: 'reference.text3',
//       name: 'Rugman',
//       project: 'Project Join',
//     },
//   ];

//   translateComments() {
//     this.comments.forEach(comment => {
//       this.translate.get(comment.text).subscribe((translatedText: string) => {
//         this.translatedComments.push({
//           ...comment,
//           text: translatedText // Use translated text
//         });
//       });
//     });
//     console.log(this.translatedComments);
    
//   }
// }

import { CommonModule } from '@angular/common';
import { Component, AfterViewInit, OnInit } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [
    TranslateModule,
    CommonModule
  ],
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
})
export class CommentsComponent implements OnInit, AfterViewInit {

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

  comments = [
    {
      text: 'reference.text1',
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


  // Define the trackComment function here
  trackComment(index: number, comment: any) {
    return comment.name; // or you can use comment.project if it's unique
  }

  translateComments() {
  
    const translationPromises = this.comments.map(comment => {
      return this.translate.get(comment.text).toPromise().then((translatedText: string) => {
        return { ...comment, text: translatedText };
      }).catch(err => {
        return { ...comment, text: comment.text }; // Fallback to original text if error
      });
    });
  
    return Promise.all(translationPromises).then(translatedComments => {
      this.translatedComments = translatedComments;
    });
  }
}





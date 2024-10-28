
import { CommonModule } from '@angular/common';
import { Component, AfterViewInit, OnInit, NgModule } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [
    TranslateModule,
    CommonModule,
  ],
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
})
export class CommentsComponent implements OnInit, AfterViewInit {
  translatedComments: any[] = [];
  currentIndex: number = 0;
  transformStyle: string = 'translateX(0)';

  constructor(private translate: TranslateService) { }

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

  comments = [
    {
      text: 'reference.text1',
      name: 'Brian',
      project: 'Frontend Devoloper',
      id: 'id1'
    },
    {
      text: 'reference.text2',
      name: 'Alex',
      project: 'Frontend Devoloper',
      id: 'id2'
    },
    {
      text: 'reference.text3',
      name: 'Pati',
      project: 'Frontend Devoloper',
      id: 'id3'
    },
  ];

  trackComment(index: number, comment: any) {
    return comment.name;
  }

  translateComments() {
    const translationPromises = this.comments.map(comment => {
      return this.translate.get(comment.text).toPromise().then((translatedText: string) => {
        return { ...comment, text: translatedText };
      }).catch(err => {
        return { ...comment, text: comment.text };
      });
    });

    return Promise.all(translationPromises).then(translatedComments => {
      this.translatedComments = translatedComments;
    });
  }

  slideToComment(index: number) {
    if (window.matchMedia("(max-width: 320px)").matches) {
      this.currentIndex = index;
      this.transformStyle = `translateX(-${index * 56}%)`;

    } else if (window.matchMedia("(max-width: 375px)").matches) {
      this.currentIndex = index;
      this.transformStyle = `translateX(-${index * 76}%)`;

    }
    else if (window.matchMedia("(max-width: 450px)").matches) {
      this.currentIndex = index;
      this.transformStyle = `translateX(-${index * 85}%)`;

    } else {
      this.currentIndex = index;
      this.transformStyle = `translateX(-${index * 100}%)`;
    }
  }


}








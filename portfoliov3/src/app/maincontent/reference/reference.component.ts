import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { CommentsComponent } from './comments/comments.component';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-reference',
  standalone: true,
  imports: [
    CommentsComponent,
    TranslateModule,
    CommonModule,
  ],
  templateUrl: './reference.component.html',
  styleUrl: './reference.component.scss'
})
export class ReferenceComponent implements AfterViewInit{

  @ViewChild('commentsComponent') commentsComponent: CommentsComponent | any;

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('en');
  }

  slideToComment(index: number) {
    this.commentsComponent.slideToComment(index);
  }

  ngAfterViewInit() {
    this.cangeColor(); 
  }

  cangeColor() {
    let contact: any = document.getElementById('contact');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          contact.classList.add('white');
        } else {
          contact.classList.remove('white');
        }
      });
    });
    
  
    const hiddenElements = document.querySelectorAll('.target4');
    hiddenElements.forEach((el) => observer.observe(el));
  }
}





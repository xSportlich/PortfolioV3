import { Component } from '@angular/core';
import { CommentsComponent } from './comments/comments.component';

@Component({
  selector: 'app-reference',
  standalone: true,
  imports: [
    CommentsComponent
  ],
  templateUrl: './reference.component.html',
  styleUrl: './reference.component.scss'
})
export class ReferenceComponent {

}

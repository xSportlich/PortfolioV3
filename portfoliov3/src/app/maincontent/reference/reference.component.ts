import { Component } from '@angular/core';
import { CommentsComponent } from './comments/comments.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-reference',
  standalone: true,
  imports: [
    CommentsComponent,
    TranslateModule
  ],
  templateUrl: './reference.component.html',
  styleUrl: './reference.component.scss'
})
export class ReferenceComponent {

}

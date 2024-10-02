import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-icons',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './icons.component.html',
  styleUrl: './icons.component.scss'
})
export class IconsComponent {

  icons = [
    {'img': '../../../assets/img/Icons.png', 'text': 'Angular'},
    {'img': '../../../assets/img/Icon1.png', 'text': 'TypeScript'},
    {'img': '../../../assets/img/Javascript.png', 'text': 'JavaScript'},
    {'img': '../../../assets/img/html.png', 'text': 'HTML'},
    {'img': '../../../assets/img/css.png', 'text': 'CSS'},
    {'img': '../../../assets/img/Api.png', 'text': 'Rest-Api'},
    {'img': '../../../assets/img/Firebase.png', 'text': 'Firebase'},
    {'img': '../../../assets/img/git.png', 'text': 'GIT'},
    {'img': '../../../assets/img/scrum.png', 'text': 'Scrum'},
    {'img': '../../../assets/img/Group.png', 'text': 'Material desingn'},
    {'img': '../../../assets/img/Group 42.png', 'text': 'Challenge me'},
  ];

}

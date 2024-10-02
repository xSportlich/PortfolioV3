import { Component } from '@angular/core';
import { IconsComponent } from './icons/icons.component';

@Component({
  selector: 'app-myskills',
  standalone: true,
  imports: [
    IconsComponent
  ],
  templateUrl: './myskills.component.html',
  styleUrl: './myskills.component.scss'
})
export class MyskillsComponent {

}

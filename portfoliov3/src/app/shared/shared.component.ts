import { Component } from '@angular/core';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-shared',
  standalone: true,
  imports: [
    FooterComponent
  ],
  templateUrl: './shared.component.html',
  styleUrl: './shared.component.scss'
})
export class SharedComponent {

}

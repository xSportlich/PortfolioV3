import { Component } from '@angular/core';
import { FooterComponent } from '../shared/footer/footer.component';

@Component({
  selector: 'app-policy',
  standalone: true,
  imports: [
    FooterComponent
  ],
  templateUrl: './policy.component.html',
  styleUrl: './policy.component.scss'
})
export class PolicyComponent {

}

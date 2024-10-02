import { Component } from '@angular/core';
import { StartsiteComponent } from './startsite/startsite.component';
import { WhyMeComponent } from './why-me/why-me.component';
import { ReferenceComponent } from './reference/reference.component';
import { MyworkComponent } from './mywork/mywork.component';
import { MyconetentComponent } from './myconetent/myconetent.component';
import { LetusworkComponent } from './letuswork/letuswork.component';
import { RouterOutlet } from '@angular/router';
import { MyskillsComponent } from './myskills/myskills.component';

@Component({
  selector: 'app-maincontent',
  standalone: true,
  imports: [
    StartsiteComponent,
    RouterOutlet,
    WhyMeComponent,
    ReferenceComponent,
    MyworkComponent,
    ReferenceComponent,
    MyconetentComponent,
    LetusworkComponent,
    MyskillsComponent
  ],
  templateUrl: './maincontent.component.html',
  styleUrl: './maincontent.component.scss'
})
export class MaincontentComponent {

}

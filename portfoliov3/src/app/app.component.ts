import { AfterViewInit, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MaincontentComponent } from './maincontent/maincontent.component';
import { HeaderComponent } from './header/header.component';
import { SharedComponent } from './shared/shared.component';
import { FooterComponent } from './shared/footer/footer.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    MaincontentComponent,
    HeaderComponent,
    SharedComponent,
    FooterComponent,
    TranslateModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit{
  title = 'portfoliov3';
  // title = 'portfolio';


  ngAfterViewInit(): void {
    const bodyElement = document.getElementById("scroll");
    let isScrolling: boolean | number = false; // Variable zur Steuerung der Scroll-Animation

    if (bodyElement) {
      bodyElement.addEventListener("wheel", function (e: WheelEvent) {
        // Verhindert mehrfaches Scrollen während einer laufenden Animation
        if (isScrolling) {
          return;
        }

        isScrolling = true;

        if (e.deltaY > 0) {
          bodyElement.scrollBy({ left: 520, behavior: 'smooth' });
        } else {
          bodyElement.scrollBy({ left: -520, behavior: 'smooth' });
        }

        // Setze isScrolling nach 500ms wieder auf false (nachdem die Animation abgeschlossen ist)
        setTimeout(() => {
          isScrolling = false;
        }, 200);  // Dauer, die zur Vermeidung von Ruckeln reicht
      }, { passive: false });
    }
  }
}

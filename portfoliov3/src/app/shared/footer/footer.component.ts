// import { Component, OnInit } from '@angular/core';
// import { Router, NavigationEnd } from '@angular/router';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-footer',
//   standalone: true,
//   imports: [CommonModule],
//   templateUrl: './footer.component.html',
//   styleUrl: './footer.component.scss'
// })
// export class FooterComponent {
//   isImprintPage = false;
//   isPolicyPage = false;

//   constructor(private router: Router) {}

//   ngOnInit() {
//     this.router.events.subscribe(event => {
//       if (event instanceof NavigationEnd) {
//         this.isImprintPage = event.urlAfterRedirects.includes('/imprint');
//       }
//       if (event instanceof NavigationEnd) {
//         this.isPolicyPage = event.urlAfterRedirects.includes('/policy');
//       }
//     });
//   }
// }

import { Component, OnInit, HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'] // Fixed 'styleUrl' to 'styleUrls'
})
export class FooterComponent implements OnInit {
  isImprintPage = false;
  isPolicyPage = false;
  isScreenSmall = false;

  constructor(private router: Router) {}

  ngOnInit() {
    // Detect the current route to toggle footer visibility
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isImprintPage = event.urlAfterRedirects.includes('/imprint');
        this.isPolicyPage = event.urlAfterRedirects.includes('/policy');
      }
    });

    // Check the initial screen size
    this.checkScreenSize(window.innerWidth);
  }

  // Listen to window resize events
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreenSize(event.target.innerWidth);
  }

  // Check if the screen width is less than 900px
  checkScreenSize(width: number) {
    this.isScreenSmall = width < 900;
  }
}



import { Component, OnInit, HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule
  ],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  isImprintPage = false;
  isPolicyPage = false;
  isScreenSmall = false;

  constructor(private router: Router, private translate: TranslateService) {
    this.translate.setDefaultLang('en');
  }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isImprintPage = event.urlAfterRedirects.includes('/imprint');
        this.isPolicyPage = event.urlAfterRedirects.includes('/policy');
      }
    });

    this.checkScreenSize(window.innerWidth);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreenSize(event.target.innerWidth);
  }

  checkScreenSize(width: number) {
    this.isScreenSmall = width < 900;
  }
}


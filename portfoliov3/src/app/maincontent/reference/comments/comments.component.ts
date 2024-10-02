import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.scss'
})
export class CommentsComponent implements AfterViewInit{

  ngAfterViewInit() {
    this.animationx(); // Call the function here after the view is initialized
  }

  animationx() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    });
  
    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));
  }
comments = [
{
  text: '‘‘Michael is a reliable and friendly person. Work in a structured way and write a clear code. I recommend him as a colleague.’’',
  name: 'Rugman',
  project: 'Project Join',
},
{
  text: '‘‘Michael is a reliable and friendly person. Work in a structured way and write a clear code. I recommend him as a colleague.’’',
  name: 'Rugman',
  project: 'Project Join',
},
{
  text: '‘‘Michael is a reliable and friendly person. Work in a structured way and write a clear code. I recommend him as a colleague.’’',
  name: 'Rugman',
  project: 'Project Join',
},

];
}

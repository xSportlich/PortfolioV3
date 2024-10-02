import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  constructor() {
  }


  projects = [
    {
      number: 1,
      name: 'Join',
      aboutTheProject: 'Task manager inspired by the Kanban System. Create and Organize tasks using drag and drop functions, assign users and categories.',
      TechnologiesIHaveUsed: 'Javascript, HTML, CSS, Firebase, GIT',
      WhatIHaveLearned: 'I learned a variety of skills. My JavaScript knowledge was tested in combination with Firebase, which gave me a whole new understanding of how programming works. Additionally, I learned to organize myself within a team and take responsibility for deadlines.',
      img: '../../../../assets/img/Property 1=Jon Hover.png',
      liveTest: '',
      gitHub: 'https://github.com/Sanorea/Join'
    },
    {
      number: 2,
      name: 'Mafia 5',
      aboutTheProject: 'Mafia 5 is a Jump, Run and Shoot Game. Help Fernando find and eliminate the criminal San Davis.',
      TechnologiesIHaveUsed: 'Javascript, HTML, CSS',
      WhatIHaveLearned: 'The focus in Mafia 5 is Object-oriented with class-based programming to to develop a well-designed game with complex tasks such as collision detection.',
      img: '../../../../assets/img/mafia.png',
      liveTest: 'https://f01602cb@eduard-kammerzel.developerakademie.net/Gangaster-game/index.html',
      gitHub: 'https://github.com/xSportlich/Gangster-Game'
    },
  ];
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent {

  skills=[
    
    {name:"html",level:95},

    {name:"css",level:85},

    {name:"php",level:65},

    {name:"javascript",level:75},

    {name:"Angular",level:55},
    
    {name:"Django",level:45},
  ]
}

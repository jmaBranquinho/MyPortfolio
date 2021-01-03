import { Component, Input, OnInit } from '@angular/core';
import { Skill } from 'src/app/shared/models/skill.model';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit {

  @Input()
  public skill: Skill;

  @Input()
  public totalYearsOfExperience: number;

  get experience() {
    const skillExp = this.skill.yearsOfExperience || 0;
    const calculatedExpPercent = (skillExp / this.totalYearsOfExperience || 0) * 100;
    return {'width': `${calculatedExpPercent}%`};
  }

  constructor() { }

  ngOnInit() {
  }

}

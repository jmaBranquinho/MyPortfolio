import { Component, ViewEncapsulation } from '@angular/core';
import { IconType } from '../shared/enums';
import { ExperienceStory } from '../shared/models/experience-story.model';
import { Skill } from '../shared/models/skill.model';

@Component({
  selector: 'app-cv-content',
  templateUrl: './cv-content.component.html',
  styleUrls: ['./cv-content.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CvContentComponent {

  get userIcon() {
    return IconType.User;
  }

  get experienceIcon() {
    return IconType.Briefcase;
  }

  get wrenchIcon() {
    return IconType.Wrench;
  }

  get currentYearsOfExperience() {
    return this.currentYear - this.startingYear;
  }

  private get currentYear(): number {
    return (new Date()).getFullYear();
  }

  private get startingYear(): number {
    return 2016;
  }

  experienceList: ExperienceStory[] = [];
  mainSkillList: Skill[] = [];
  otherSkillsList: string[] = [];

  constructor() {
    this.experienceList = [
      {
        jobRole: 'Senior Full Stack Developer',
        jobDate: '2020 - Present',
        company: 'Siemens',
        description: 'Development and maintenance of of an Angular and .NET internal self-service and form-generating application. Led and coordinated a small team.'
      },
      {
        jobRole: 'Junior Full Stack Developer',
        jobDate: '2018 - 2020',
        company: 'Hitachi Consulting',
        description: 'Development and maintenance of an Angular and .NET back-office application for an international fast food company.'
      },
      {
        jobRole: 'Computer Vision Research Fellow',
        jobDate: '2016 - 2018',
        company: 'Inov Inesc Inovacao',
        description: 'Development of Machine Learning solutions for UAV and boat detection using OpenCV, C++ and .NET.'
      },
      {
        jobRole: 'Trainee',
        jobDate: '2016 - 2016',
        company: 'SoftInsa',
        description: 'Installation and configuration of IBM BI and Big Data software. Application development to automate software configuration and data transfer.'
      },
    ];

    this.mainSkillList = [
      {
        name: 'C# / .Net',
        yearsOfExperience: this.getCurrentDotNetExperience()
      },
      {
        name: 'Angular',
        yearsOfExperience: 3
      },
      {
        name: 'Entity framework / Dapper',
        yearsOfExperience: 3
      },
      {
        name: 'Docker',
        yearsOfExperience: 1
      },
      {
        name: 'Azure',
        yearsOfExperience: 1
      },
    ];
  this.otherSkillsList = [
    'HTML 5',
    'Css', 
    'Sass',
    'Bootstrap',
    'Typescript / Javascript',
    'Sql',
    'Git',
    'C++',
    ]
  }

  getOtherSkills() {
    return this.otherSkillsList.join(', ');
  }

  private getCurrentDotNetExperience() {
    return this.currentYearsOfExperience - 1;
  }

}

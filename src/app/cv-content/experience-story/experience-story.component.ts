import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience-story',
  templateUrl: './experience-story.component.html',
  styleUrls: ['./experience-story.component.scss']
})
export class ExperienceStoryComponent implements OnInit {

  @Input()
  public jobRole: string;

  @Input()
  public jobDate: string;

  @Input()
  public company: string;

  @Input()
  public description: string;

  @Input()
  public keyPoints: string[];

  constructor() { }

  ngOnInit() {
  }

}

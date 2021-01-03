import { Component, Input } from '@angular/core';
import { IconType } from 'src/app/shared/enums';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent {

  @Input()
  public iconType: IconType;

  @Input()
  public title: string;

  constructor() { }

}

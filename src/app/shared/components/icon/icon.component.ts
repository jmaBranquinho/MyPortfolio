import { Component, Input } from '@angular/core';
import { IconType } from '../../enums';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent {

  @Input()
  public iconType: IconType;

  @Input()
  public isBackgroundDisplayed: boolean = true;

  constructor() { }

}

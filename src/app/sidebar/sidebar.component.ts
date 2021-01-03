import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { IconType } from '../shared/enums';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SidebarComponent implements OnInit {

  get envelopeIcon() {
    return IconType.Envelope;
  }

  get phoneIcon() {
    return IconType.Phone;
  }

  get linkedinIcon() {
    return IconType.Linkedin;
  }

  get githubIcon() {
    return IconType.Github;
  }

  get mapIcon() {
    return IconType.Map;
  }

  constructor() { }

  ngOnInit() {
  }

}

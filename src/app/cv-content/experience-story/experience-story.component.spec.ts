import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceStoryComponent } from './experience-story.component';

describe('ExperienceStoryComponent', () => {
  let component: ExperienceStoryComponent;
  let fixture: ComponentFixture<ExperienceStoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperienceStoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienceStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

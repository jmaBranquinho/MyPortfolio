import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AppComponent } from './app.component';
import { CvContentComponent } from './cv-content/cv-content.component';
import { IconComponent } from './shared/components/icon/icon.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ProfilePictureComponent } from './sidebar/profile-picture/profile-picture.component';
import { SectionComponent } from './cv-content/section/section.component';
import { ExperienceStoryComponent } from './cv-content/experience-story/experience-story.component';
import { EducationComponent } from './sidebar/education/education.component';
import { LanguagesComponent } from './sidebar/languages/languages.component';
import { SkillComponent } from './cv-content/skill/skill.component';



@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    CvContentComponent,
    IconComponent,
    ProfilePictureComponent,
    SectionComponent,
    ExperienceStoryComponent,
    EducationComponent,
    LanguagesComponent,
    SkillComponent
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

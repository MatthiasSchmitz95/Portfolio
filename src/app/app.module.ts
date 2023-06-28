import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeSectionComponent } from './home-section/home-section.component';
import { AboutSectionComponent } from './about-section/about-section.component';
import { SkillSectionComponent } from './skill-section/skill-section.component';
import { PortfolioSectionComponent } from './portfolio-section/portfolio-section.component';
import { ProjectSampleComponent } from './project-sample/project-sample.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeSectionComponent,
    AboutSectionComponent,
    SkillSectionComponent,
    PortfolioSectionComponent,
    ProjectSampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

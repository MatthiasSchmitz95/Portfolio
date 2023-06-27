import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeSectionComponent } from './home-section/home-section.component';
import { AboutSectionComponent } from './about-section/about-section.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeSectionComponent,
    AboutSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

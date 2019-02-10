import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { Error404Component } from './error404/error404.component';
import { GlobalDataService } from './shared/global-data.service';
import { BgOverlayDirective } from './shared/directives/bg-overlay.directive';
import { WrapperComponent } from './wrapper/wrapper.component';
import { VideoComponent } from './video/video.component';
import { ResumeComponent } from './resume/resume.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { WalkingCatComponent } from './walking-cat/walking-cat.component';
import { CodeInsertDirective } from './directives/code-insert.directive';
import { RootCodeInsertDirective } from './directives/root-code-insert.directive';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    Error404Component,
    BgOverlayDirective,
    WrapperComponent,
    VideoComponent,
    ResumeComponent,
    WalkingCatComponent,
    CodeInsertDirective,
    RootCodeInsertDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PdfViewerModule,
  ],
  providers: [
    GlobalDataService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

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
import { GlobalFunctionsService } from './shared/global-functions.service'
import { BgOverlayDirective } from './shared/directives/bg-overlay.directive';
import { ResumeComponent } from './resume/resume.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { AniCircleComponent } from './ani-circle/ani-circle.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { IntroComponent } from './intro/intro.component';
import { PipesDemoComponent } from './code-demos/pipes-demo/pipes-demo.component';
import { ROrderByPipe } from '../../../ngx-ripes/src/app/pipes/rOrderBy-pipe';
import { RMbGbPipe } from '../../../ngx-ripes/src/app/pipes/rmbgb-pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    Error404Component,
    BgOverlayDirective,
    ResumeComponent,
    AniCircleComponent,
    IntroComponent,
    PipesDemoComponent,
    RMbGbPipe,
    ROrderByPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PdfViewerModule,
    TooltipModule.forRoot(),
  ],
  providers: [
    GlobalDataService,
    GlobalFunctionsService,
    // RMbGbPipe,
    // ROrderByPipe

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

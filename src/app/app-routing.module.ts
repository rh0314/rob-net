import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { Error404Component } from './error404/error404.component';
import { ResumeComponent } from './resume/resume.component';
import { IntroComponent } from './intro/intro.component';
import { ContentWrapperComponent } from './content-wrapper/content-wrapper.component';

const routes: Routes = [
  { path: '', component: IntroComponent, data: {} },
  { path: 'home', component: HomeComponent, data: {} },
  { path: 'about', component: AboutComponent, data: {} },
  { path: 'resume', component: ResumeComponent, data: {} },
  { path: 'intro', component: IntroComponent },
  { path: 'content', component: ContentWrapperComponent },
  { path: '**', component: Error404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

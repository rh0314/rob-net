import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { Error404Component } from './error404/error404.component';
import { VideoComponent } from './video/video.component';
import { ResumeComponent } from './resume/resume.component';

const routes: Routes = [
  { path: '', component: HomeComponent, data: {} },
  { path: 'home', component: HomeComponent, data: {} },
  { path: 'about', component: AboutComponent, data: {} },
  { path: 'video', component: VideoComponent, data: {} },
  { path: 'resume', component: ResumeComponent, data: {} },
  { path: '**', component: Error404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

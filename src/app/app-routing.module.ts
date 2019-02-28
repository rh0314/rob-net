import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { Error404Component } from './error404/error404.component';
import { ResumeComponent } from './resume/resume.component';
import { IntroComponent } from './intro/intro.component';
import { PipesDemoComponent } from './code-demos/pipes-demo/pipes-demo.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, data: {  } },
  { path: 'about', component: AboutComponent, data: {} },
  { path: 'resume', component: ResumeComponent, data: {} },
  { path: 'intro', component: IntroComponent },
  { path: 'pipes', component: PipesDemoComponent },

  { path: '', redirectTo: '/intro', pathMatch: 'full' },
  { path: '**', component: Error404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

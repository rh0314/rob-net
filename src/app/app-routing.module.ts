import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { Error404Component } from './error404/error404.component';
import { ResumeComponent } from './resume/resume.component';
import { IntroComponent } from './intro/intro.component';
import { ContentWrapperComponent } from './content-wrapper/content-wrapper.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, data: {  } },
  { path: 'about', component: AboutComponent, data: {} },
  { path: 'resume', component: ResumeComponent, data: {} },
  { path: 'intro', component: IntroComponent },
  // { path: 'content', component: ContentWrapperComponent },
  // { path: 'content/home', component: ContentWrapperComponent, data: { element: 'wrappedHomeContent', offset: 0 } },
  // { path: 'content/about', component: ContentWrapperComponent, data: { element: 'wrappedAboutContent', offset: 0 } },
  // { path: 'content/resume', component: ContentWrapperComponent, data: { element: 'wrappedResumeContent', offset: 0 } },

  { path: '', redirectTo: '/intro', pathMatch: 'full' },
  { path: '**', redirectTo: '/intro', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

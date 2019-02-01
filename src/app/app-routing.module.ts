import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { Error404Component } from './error404/error404.component';
import { WrapperComponent } from './wrapper/wrapper.component';
import { RouteData } from './shared/object-models/route-data';
import { VideoComponent } from './video/video.component';

const routes: Routes = [
  { path: '', component: WrapperComponent, children: [
    { path: 'home', component: HomeComponent, data: { } },
    { path: 'about', component: AboutComponent, data: { } },
    { path: 'video', component: VideoComponent, data: { } },
  ] },
  { path: '**', component: Error404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

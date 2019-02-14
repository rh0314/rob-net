import { Component, Input } from '@angular/core';
// import { GlobalDataService } from './shared/global-data.service';
import { RouteData } from './shared/object-models/route-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rob-net';
  global = {
    routeData: RouteData
  }

  @Input() watchData: Array<any> = [];

  constructor() {

  }






}


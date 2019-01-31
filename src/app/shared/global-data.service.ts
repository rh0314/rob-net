import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouteData } from './object-models/route-data';

@Injectable({
  providedIn: 'root'
})
export class GlobalDataService {
  route: ActivatedRoute;
  routeData: RouteData = {
    opacity: 60,
    backgroundImage: 'servers'
  };

  constructor(private activatedRoute: ActivatedRoute) {
    this.route = activatedRoute;
   }
}

import { Component, OnInit } from '@angular/core';
import { GlobalDataService } from '../shared/global-data.service';
import { GlobalFunctionsService } from '../shared/global-functions.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-content-wrapper',
  templateUrl: './content-wrapper.component.html',
  styleUrls: ['./content-wrapper.component.scss']
})
export class ContentWrapperComponent implements OnInit {
  sub: Subscription;
  routeData: any;
  constructor(
    private globalFunctions: GlobalFunctionsService,
    private globalData: GlobalDataService, 
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.sub = this.route.data.subscribe(data => {
      this.routeData = data;
      this.globalFunctions.scrollToElement(data);
    }, error => {
      console.error(error);
    });
    window.addEventListener('scroll', (event) => {
      this.globalFunctions.onScroll(event);
    });

    this.globalFunctions.onScroll({});
  }

}

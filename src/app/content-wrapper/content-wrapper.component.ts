import { Component, OnInit } from '@angular/core';
import { GlobalDataService } from '../shared/global-data.service';
import { GlobalFunctionsService } from '../shared/global-functions.service';

@Component({
  selector: 'app-content-wrapper',
  templateUrl: './content-wrapper.component.html',
  styleUrls: ['./content-wrapper.component.scss']
})
export class ContentWrapperComponent implements OnInit {

  constructor(
    private globalFunctions: GlobalDataService,
    private globalData: GlobalDataService
  ) { }

  ngOnInit() {
    console.log('content wrapper: router: ', this.globalData.router);
  }

}

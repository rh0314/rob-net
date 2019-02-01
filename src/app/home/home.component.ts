import { Component, OnInit, Input, Output, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { Router, Route, ActivatedRoute, Params, Data } from '@angular/router';
import { GlobalDataService } from '../shared/global-data.service';
import { RouteData } from '../shared/object-models/route-data';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private global: GlobalDataService, private cdr: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.cdr.detach();
  }

  ngAfterViewInit() {
    this.cdr.checkNoChanges()
    this.global.setBg('servers');
    this.cdr.detectChanges();
  }

}

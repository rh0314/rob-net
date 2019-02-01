import { Component, OnInit, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { GlobalDataService } from './../shared/global-data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})

export class AboutComponent implements OnInit {
  constructor(private global: GlobalDataService, private cdr: ChangeDetectorRef) { 

  }

  ngOnInit() {
    this.cdr.detach();
  }

  ngAfterViewInit() {
    this.cdr.checkNoChanges()
    this.global.setBg('fingers');
    this.cdr.detectChanges();
  }

}

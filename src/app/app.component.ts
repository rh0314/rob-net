import { Component, OnInit, Inject } from '@angular/core';
import * as AOS from 'aos';
import { AotSummaryResolver } from '@angular/compiler';
import { DOCUMENT } from "@angular/common";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'rob-net';

  aosConfig = {
    offset: 0,
    delay: 500, 
    duration: 800,
    easing: 'ease-out',
    anchorPlacement: 'top'
  };

  constructor(
    @Inject(DOCUMENT) document

    ) {

  }

  ngOnInit() {
    AOS.init(this.aosConfig);
    document.addEventListener('aos:in', (detail) => {
      console.log('ani in: ', detail);
    });
    document.addEventListener('aos:out', (detail) => {
      console.log('ani out: ', detail);
    });
    
  }






}


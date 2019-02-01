import { Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { RouteData } from './../shared/object-models/route-data';
import { Router, ActivatedRoute } from '@angular/router';
import { GlobalDataService } from './../shared/global-data.service';
import { ThrowStmt } from '@angular/compiler';


@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WrapperComponent implements OnInit {
  bg: string;

  constructor(private global: GlobalDataService, private cdr: ChangeDetectorRef) {


  }

  ngOnInit() {
    window.addEventListener('scroll', e => {
      this.fixElements();
    });
    window.addEventListener('resize', e => {
      this.fixElements();
    });

    setTimeout(() => {
      this.fixElements();
    }, 500);
  }

  ngAfterViewInit() {
    this.cdr.checkNoChanges();
    this.bg = this.global.getBg();
    this.cdr.detectChanges();
  }


  fixFooterHeight() {
    const setFooterHeight = 40;
    const wh = window.innerHeight;
    const hh = document.getElementById('rn-main-menu-bg').offsetHeight;
    const mh = wh - setFooterHeight;
    const main = document.getElementById('home');
    const overlay = document.getElementById('rn-main-overlay');
    main.style.height = mh + 'px';
    overlay.style.height = mh + 'px';
  }

  fixElements() {
    this.fixFooterHeight();
  }
}

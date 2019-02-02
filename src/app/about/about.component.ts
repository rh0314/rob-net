import { Component, OnInit } from '@angular/core';
import { GlobalDataService } from './../shared/global-data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private global: GlobalDataService) { }

  ngOnInit() {
    this.setContentBoxHeight();
  }

  setContentBoxHeight() {
    const wh = window.innerHeight;
    const astSetOffset = 274;
    const asb = wh - astSetOffset;
    const aboutScrollBox = document.getElementById('about-scroll-box');
    aboutScrollBox.style.maxHeight = asb + 'px';
  }

}

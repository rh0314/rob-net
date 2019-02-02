import { Component, OnInit, Inject } from '@angular/core';
import { RouteData } from './../shared/object-models/route-data';
import { Router, ActivatedRoute } from '@angular/router';
import { GlobalDataService } from './../shared/global-data.service';


@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss']
})
export class WrapperComponent implements OnInit {
  routeData: RouteData = {
    backgroundImage: 'servers',
    opacity: 80
  }
  constructor(private router: Router, private acitveRoute: ActivatedRoute, private global: GlobalDataService) {
    console.log('router: ', router);
    console.log('activeRoute: ', acitveRoute)
    console.log('global: ', global)


  }

  ngOnInit() {
    window.addEventListener('scroll', e => {
      this.fixElements();
    });
    window.addEventListener('resize', e => {
      this.fixElements();
    });

    this.global.routeData = {
      backgroundImage: this.acitveRoute.children.length > 0 ? this.acitveRoute.children[0].snapshot.data.backgroundImage : this.routeData.backgroundImage,
      opacity: this.acitveRoute.children.length > 0 ? this.acitveRoute.children[0].snapshot.data.opacity : this.routeData.opacity
    }

    setTimeout(() => {
      this.fixElements();
    }, 500);

  }

  resizeElements() {
    // set or pre-calculated numbers
    const setFooterHeight = 40;

    // flexible sizes
    const wh = window.innerHeight;

    // get the elements
    const main = document.getElementById('home');
    const overlay = document.getElementById('rn-main-overlay');
    const routerContainer = document.getElementById('router-outlet-container');
    const header = document.getElementById('rn-main-menu-bg');;


    //c= calculated sizes (elements to be reszied)
    const hh = header.offsetHeight;
    const mh = wh - setFooterHeight;
    const rch = wh - (setFooterHeight + hh);

    // resize the elements
    main.style.height = mh + 'px';
    overlay.style.height = mh + 'px';
    routerContainer.style.height = rch + 'px';
    routerContainer.style.top = (hh + 1) + 'px';
  }

  setAboutContentBoxHeight() {
    const aboutScrollBox = document.getElementById('about-scroll-box');
    if (aboutScrollBox) {
      const wh = window.innerHeight;
      const astSetOffset = 274;
      const asb = wh - astSetOffset;
      aboutScrollBox.style.maxHeight = asb + 'px';
    }
  }


  fixElements() {
    this.resizeElements();
    this.setAboutContentBoxHeight();
  }


}

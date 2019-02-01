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

  resizeMainElements() {
    const setFooterHeight = 40;
    const wh = window.innerHeight;
    const hh = document.getElementById('rn-main-menu-bg').offsetHeight;
    const mh = wh - setFooterHeight;
    const rah = wh - (setFooterHeight + hh);
    const main = document.getElementById('home');
    const overlay = document.getElementById('rn-main-overlay');
    const routerContainer = document.getElementById('router-outlet-container');
    main.style.height = mh + 'px';
    overlay.style.height = mh + 'px';
  }

  fixElements() {
    this.resizeMainElements();
  }


}

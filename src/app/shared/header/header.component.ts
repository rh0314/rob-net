import { Component, OnInit, HostListener } from '@angular/core';
import { Router, RouterLinkActive } from '@angular/router';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  scrollTop: number;

  @HostListener('window:scroll', ['$event'])
  onscroll(event) {
    this.scrollTop = window.scrollY;
    // if (this.scrollTop > 25) {
    //   document.getElementById('navbar').style.opacity = '0.25';
    // } 
    // else {
    //   document.getElementById('navbar').style.opacity = '1';
    // }
  }
  constructor(
    private router: Router, 
  ) { }

  ngOnInit() {
  }

}

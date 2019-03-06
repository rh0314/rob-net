import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-cc-rewards',
  templateUrl: './cc-rewards.component.html',
  styleUrls: ['./cc-rewards.component.scss']
})

export class CcRewardsComponent implements OnInit, AfterViewInit {
  video: HTMLVideoElement;

  constructor(private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    
    const el = document.getElementById('ccRewardsVideo');
    if (el) {
      this.video = <HTMLVideoElement>el;
      this.video.volume = 0.1;
    }
  }

  locateAndPlay() {
    this.video.scrollIntoView({
      block: "center",
      inline: "center",
      behavior: "smooth"
    });
    this.video.play();
    this.video.textTracks[0].mode = 'showing';
    this.video.classList.add('enlarged');
    console.log(this.video, this.video.textTracks);
  }



}

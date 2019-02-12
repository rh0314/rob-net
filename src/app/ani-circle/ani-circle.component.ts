import { Component, OnInit, Renderer2, ElementRef, Input, OnChanges, SimpleChange } from '@angular/core';
import { parse } from 'querystring';

@Component({
  selector: 'app-ani-circle',
  templateUrl: './ani-circle.component.html',
  styleUrls: ['./ani-circle.component.scss']
})
export class AniCircleComponent implements OnInit, OnChanges {
  native: Element;
  @Input('start-x') startX: number = -99999;
  @Input('start-y') startY: number = -99999;
  @Input('home-x') homeX: number = 1;
  @Input('home-y') homeY: number = 1;
  @Input('delay') delay: number = 5000;
  @Input('duration') duration: number = 3000;
  @Input('front-image') frontImage: any;
  @Input('front-text') frontText: string;
  @Input('back-image') backImage: any;
  @Input('back-text') backText: string;
  @Input('idx') idx: number = -1;

  ngStyle: any;
  ngStyles: Array<string> = new Array<string>();
  inYoFaceBezier: string = 'cubic-bezier(0,1.33,.55,.99)';
  homeBezier: string = 'cubic-bezier(1,.01,1,-0.17)';
  maxImageSize: number;
  canvasSize: number;

  
  constructor(
    private rend: Renderer2,
    private el: ElementRef
  ) { }

  ngOnInit() {
    this.initializeScreenSize();
    this.initialize();
    this.iniitializeLater();
  }

  ngOnChanges(e: any) {
    console.log('change', e);
    if (e.backImage) {
      this.setBackImage();
    }
  }


  initialize() {
    if (!(this.el && this.el.nativeElement)) {
      return;
    }
    const n = this.el.nativeElement;
    this.rend.setStyle(n, 'top', this.startY + 'px');
    this.rend.setStyle(n, 'left', this.startX + 'px');
    this.rend.setStyle(n, 'position', 'absolute');
    this.rend.setStyle(n, 'opacity', '0.0');

    this.rend.setStyle(n, 'webkitTransition', 'top left bottom right width height opacity transform');
    this.rend.setStyle(n, 'webkitTransitionDuration', this.duration + 'ms');
    this.rend.setStyle(n, 'transition', 'top left bottom right width height opacity transform');
    this.rend.setStyle(n, 'transitionDuration', this.duration + 'ms');

    if (this.idx % 2 === 0) {
      const flip = n.children[0];
      if (flip) {
        this.rend.addClass(flip, 'flip-vertical');
      }
    }

    this.setImages();

    setTimeout(() => {
      this.inYourFace();
    }, this.delay)
  }

  iniitializeLater() {
    setTimeout(() => {

      this.setHomeX();

    }, 150);
  }

  initializeScreenSize() {
    const w = screen.width;

    switch(true) {
      case (w < 768):
        this.canvasSize = 125;
        this.maxImageSize = 80;
      case (w >= 768 && w < 992):
      this.canvasSize = 150;
      this.maxImageSize = 100;
        break;
      case (w >= 992 && w < 1200):
        this.canvasSize = 175;
        this.maxImageSize = 125;
        break;
      case (w >= 1200 && w < 1400):
        this.canvasSize = 200;
        this.maxImageSize = 150;
        break;
      case (w >= 1400):
        this.canvasSize = 250;
        this.maxImageSize = 175;
        break;
    }
  }

  setHomeX() {
    if (this.homeX > -11 && this.homeX < 11) {
      let center = window.innerWidth / 2;
      const front = this.el.nativeElement.children[0].children[0];
      center = center - (front.offsetWidth / 2)
      this.homeX = (center - (this.homeX * this.canvasSize)) - 12.5;
    }

  }
  /* 


  */

  centerText() {
    const title = document.getElementById('circleTitle' + this.idx);
    const pe = this.rend.parentNode(title);
    const w = pe.getBoundingClientRect().width;
    const text = document.getElementById('circleText' + this.idx);
    const tw = title.clientWidth;
    const pw = (w - tw) / 2;
    this.rend.setStyle(title, 'left', pw + 'px');
  }

  setImages() {
    if (this.frontImage) {
      this.frontImage.sizeX = (this.frontImage.sizeX && this.frontImage.sizeX <= 2 ? (this.frontImage.sizeX * this.maxImageSize) : this.maxImageSize);
      this.frontImage.sizeY = (this.frontImage.sizeY && this.frontImage.sizeY <= 2 ? (this.frontImage.sizeY * this.maxImageSize) : this.maxImageSize);
      const f = this.el.nativeElement.children[0].children[0];  // gets "front" div

      const imgSize = this.frontImage.sizeX + 'px ' + this.frontImage.sizeY + 'px';
      if (f) {
        this.rend.setStyle(f, 'background-image', 'url(' + this.frontImage.path + ')');
        this.rend.setStyle(f, 'background-size', imgSize);
        this.rend.setStyle(f, 'background-position', 'center');
        this.rend.setStyle(f, 'background-repeat', 'no-repeat');
      }
    }
    if (this.backImage) {
      this.setBackImage();
    }
  }

  setBackImage() {
    const b = this.el.nativeElement.children[0].children[1];  // gets "back" div
    if (b) {
      const imgSize = this.maxImageSize + 'px auto'
      this.rend.setStyle(b, 'background-image', 'url(' + this.backImage + ')');
      this.rend.setStyle(b, 'background-size', imgSize);
      this.rend.setStyle(b, 'background-repeat', 'no-repeat');
      this.rend.setStyle(b, 'background-position', 'center center');
    }
  }

  inYourFace() {
    if (!(this.el && this.el.nativeElement)) {
      return;
    }
    const n = this.el.nativeElement;
    const f = n.children[0].children[0];
    const frame = this.rend.parentNode(n);
    const t = ((window.innerHeight / 2) - frame.offsetTop) + window.scrollY;
    this.rend.setStyle(n, 'transitionTimingFunction', this.inYoFaceBezier);
    this.rend.setStyle(n, 'left', ((window.innerWidth / 2) - (f.offsetWidth / 2)) + 'px');
    this.rend.setStyle(n, 'top', t + 'px');
    this.rend.setStyle(n, 'opacity', '1');

    // The first timeout increases the object's size by 50% as soon as it's 
    // done moving (i.e., when the transition above is done).
    // The second timeout sends the object to its "home" location.
    const _this = this;
    const popTransform = 300;
    setTimeout(() => {
      _this.rend.setStyle(f, 'webkitTransformDuration', popTransform + 'px');
      _this.rend.setStyle(f, 'webkitTransform', 'scale(1.5, 1.5)');
      _this.rend.setStyle(f, 'transformDuration', popTransform + 'px');
      _this.rend.setStyle(f, 'transform', 'scale(1.5, 1.5)');
      setTimeout(() => {
        _this.goHome();
      }, popTransform);
    }, (_this.duration));
  }



  goHome() {
    if (!(this.el && this.el.nativeElement)) {
      return;
    }
    const n = this.el.nativeElement;
    const f = n.children[0].children[0];
    this.rend.setStyle(n, 'transitionTimingFunction', this.homeBezier);
    this.rend.setStyle(f, 'transform', 'scale(1, 1)');
    this.rend.setStyle(n, 'left', this.homeX + 'px');
    this.rend.setStyle(n, 'top', ((this.homeY * this.canvasSize) + 'px'));
    this.rend.setStyle(n, 'opacity', '1');
    this.centerText();
  }

  addBuildNgStyle(newStyle: any) {
    this.ngStyles.push(newStyle);
    let styleString = "";
    this.ngStyles.forEach(s => {
      styleString += s + ',';
    });
    styleString = "{ " + styleString + " }";
    return styleString;
  }
}

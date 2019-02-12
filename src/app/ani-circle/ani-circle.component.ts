import { Component, OnInit, Renderer2, ElementRef, Input, OnChanges, SimpleChange, HostListener } from '@angular/core';
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
  areaSize: number;
  circleSize: number;
  maxImageSize: number;
  bufferSize: number;
  vwCalc = (screen.width / 100);
  vhCalc = (screen.height / 100);
  uUnits = 'v';

  @HostListener('window:resize', ['$event'])
  onresize(event) {
    this.initializeScreenSize();
    this.setImages();
    this.setHome();
    this.goHome();
  }


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

  tovw(val: number) {
    return val / this.vwCalc;
  }

  tovh(val: number) {
    return val / this.vhCalc;
  }

  units(hw?: string) {
    return this.uUnits === 'px' ? 'px' : 'v' + hw;
  }

  initialize() {
    if (!(this.el && this.el.nativeElement)) {
      return;
    }
    const n = this.el.nativeElement;
    this.rend.setStyle(n, 'top', this.tovh(this.startY) + this.units('h'));
    this.rend.setStyle(n, 'left', this.tovw(this.startX) + this.units('w'));
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

      this.setHome();

    }, 150);
  }

  initializeScreenSize() {
    const w = screen.width;
    this.vwCalc = w / 100;
    this.vhCalc = screen.height / 100;
    this.circleSize = w * 0.18;
    this.bufferSize = this.circleSize * 0.1;
    this.areaSize = this.circleSize + this.bufferSize;
    this.maxImageSize = this.circleSize * 0.5;

  }

  setHome() {

    if (this.homeX > -11 && this.homeX < 11) {
      let center = window.innerWidth / 2;
      const front = this.el.nativeElement.children[0].children[0];
      center = center - (front.offsetWidth / 2)
      this.homeX = (center - (this.homeX * this.areaSize));
      this.homeY = this.areaSize * this.homeY;
    }

  }

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

      const imgSize = this.frontImage.sizeX + 'px ' + this.frontImage.sizeY + this.units('h');
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
    this.rend.setStyle(n, 'left', ((window.innerWidth / 2) - (f.offsetWidth / 2)) + this.units('w'));
    this.rend.setStyle(n, 'top', t + this.units('h'));
    this.rend.setStyle(n, 'opacity', '1');

    // The first timeout increases the object's size by 50% as soon as it's 
    // done moving (i.e., when the transition above is done).
    // The second timeout sends the object to its "home" location.
    const _this = this;
    const popTransform = 300;
    setTimeout(() => {
      _this.rend.setStyle(f, 'webkitTransformDuration', popTransform + 'ms');
      _this.rend.setStyle(f, 'webkitTransform', 'scale(1.5, 1.5)');
      _this.rend.setStyle(f, 'transformDuration', popTransform + 'ms');
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
    this.rend.setStyle(n, 'left', this.tovw(this.homeX) + this.units('w'));
    this.rend.setStyle(n, 'top', this.tovh(this.homeY) + this.units('h'));
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

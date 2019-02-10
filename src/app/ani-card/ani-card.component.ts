import { Component, OnInit, Renderer2, ElementRef, Input } from '@angular/core';


@Component({
  selector: 'app-ani-card',
  templateUrl: 'ani-card.component.html',
//   template: `<div class="flip">
//   <div class="front"  style="background-image: url(https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb)">
//     <div class="text-shadow">MOUNTAIN</div>
//   </div>
// </div>
// <div class="back">
//   <h2>Angular</h2>
//   <p>Good tools make application development quicker and easier to maintain than if you did everything by hand..</p>
// </div>`,
  styleUrls: ['./ani-card.component.scss']
})
export class AniCardComponent implements OnInit {
  native: Element;
  @Input('start-x') startX: number = -99999;
  @Input('start-y') startY: number = -99999;
  @Input('home-x') homeX: number = 100;
  @Input('home-y') homeY: number = 100;
  @Input('delay') delay: number = 5000;
  @Input('front-image') frontImage: string;
  @Input('front-text') frontText: string;
  @Input('back-image') backImage: string;
  @Input('back-text') backText: string;
  @Input('idx') idx: number = -1;

  ngStyle: any;
  ngStyles: Array<string> = new Array<string>();

  constructor(
    private rend: Renderer2, 
    private el: ElementRef
    ) { }

  ngOnInit() {
    console.log('el', this.el.nativeElement.children);
    this.initialize();
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

    this.rend.setStyle(n, 'webkitTransition', 'top left bottom right width height opacity, transform');
    this.rend.setStyle(n, 'webkitTransitionDuration', '3s');

    this.centerVertically();

    if (this.idx % 2 === 0) {
      const flip = n.children[0];
      if (flip) {
        this.rend.addClass(flip, 'flip-vertical');
      }
    }

    this.setImages();

    setTimeout(() => {
      this.goHome();
    }, this.delay)
  }

  setImages() {
    if (this.frontImage) {
      const f = this.el.nativeElement.children[0].children[0];
      if (f) {
        this.rend.setStyle(f, 'background-image', 'url(' + this.frontImage + ')');
      }
    }
    if (this.backImage) {
      const b = this.el.nativeElement.children[0].children[1];
      if (b) {
        this.rend.setStyle(b, 'background-image', 'url(' + this.backImage + ')');
        this.rend.setStyle(b, 'background-size', '');
      }
    }
  }

  goHome() {
    if (!(this.el && this.el.nativeElement)) {
      return;
    }
    const n = this.el.nativeElement;
    this.rend.setStyle(n, 'left', this.homeX + 'px');
    this.rend.setStyle(n, 'top', this.homeY + 'px');
    this.rend.setStyle(n, 'opacity', '1');
    this.rend.setStyle(n, 'transitionTimingFunction', 'easeIn');
    this.rend.setStyle(n, 'position', 'relative');
    
  }

  centerVertically() {
    if (!this.el.nativeElement || this.frontText.length > 23) {
      return;
    }
    const textBlock = this.el.nativeElement.children[0].children[0];
    const th = textBlock.getBoundingClientRect().height;
    const eh = this.el.nativeElement.getBoundingClientRect().height;
    this.rend.setStyle(this.el.nativeElement.children[0].children[0], 'padding-top', 'calc(' + ((eh - th) / 2) + 'px + 0.5rem)')
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

import { Directive, OnInit, HostListener, Inject, Renderer2, ElementRef } from '@angular/core';
import { DOCUMENT } from "@angular/platform-browser";

@Directive({
  selector: '[appRootCodeInsert]'
})
export class RootCodeInsertDirective implements OnInit {
  @HostListener('window:resize', ['$event'])
  onresize(event) {
    this.fixBg();
  }

  document: any;

  constructor(
    @Inject(DOCUMENT) document,
    private rend: Renderer2,
    private el: ElementRef
  ) {
    this.document = document;
  }

  ngOnInit() {
    this.wireUpWindowEvents();
  }

  wireUpWindowEvents() {
    window.addEventListener('resize', this.fixBg);
    window.addEventListener('scroll', this.fixBg);
  }

  fixBg() {
    const _this = this;
    let bg = document.getElementById('backgroundImage');
    if (bg) {
      const body = document.body;
      const html = document.documentElement;
      const height = Math.max(body.scrollHeight, body.offsetHeight,
        html.clientHeight, html.scrollHeight, html.offsetHeight);
      bg.style.width = window.innerWidth + 'px';
    }
  }

}

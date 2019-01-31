import { Directive, ElementRef, OnInit, TemplateRef, ViewContainerRef, Input } from '@angular/core';
import { GlobalDataService } from '../../shared/global-data.service';

@Directive({
  selector: '[appBgOverlay]'
})
export class BgOverlayDirective implements OnInit {

  constructor(el: ElementRef, 
      global: GlobalDataService, 
      private templateRef: TemplateRef<any>,
      private viewContainerRef: ViewContainerRef
    ) {
    el.nativeElement.innerHTML = 'HELLO!';
   }

  @Input()
  set backgroundImagte(image: string) {} 

   ngOnInit() {

   }

}

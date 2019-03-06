import { Directive, ElementRef, OnInit, TemplateRef, ViewContainerRef, Input, OnChanges, SimpleChanges, Renderer2 } from '@angular/core';
import { GlobalDataService } from '../../shared/global-data.service';

@Directive({
  selector: '[bg-manager]'
})
export class BgManagerDirective implements OnInit, OnChanges {
el: ElementRef;
mStyle: any;
@Input('bg-image') imgPath: string;
  constructor(
      private e: ElementRef, 
      private globalData: GlobalDataService, 
      // private templateRef: TemplateRef<any>,
      private viewContainerRef: ViewContainerRef,
      private rend: Renderer2
    ) {
      this.el = e;
    }

   ngOnInit() {
    this.mStyle = this.globalData.backgroundManagerStyle;
    this.applyStyle(this.el);
   }

   ngOnChanges(changes: SimpleChanges) {
     console.log('onChange: changes: ', changes);
   }

   createBgManager() {
   }

   applyStyle(e: ElementRef) {
     const keys = Object.keys(this.mStyle);
     const n = e.nativeElement;
     for (let i = 0; i < keys.length; i++) {
      this.rend.setStyle(n, keys[i], this.mStyle[keys[i]]);
     }
     if (this.imgPath) {
       this.rend.setStyle(n, 'background-image', this.imgPath);
     }
   }

}

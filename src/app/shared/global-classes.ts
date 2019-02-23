export class ElementCoords {
  bottom?: number;
  height: number;
  left: number;
  right?: number;
  top: number;
  width: number;
  x: number;
  y: number;
  constructor(rect?: DOMRect | ClientRect) {
    if (rect) {
      for (let key in rect) {
        this[key] = rect[key];
      }
    }
  }
}

export class TriggerElement extends HTMLElement {
  class?: string;
  triggerClasses: Array<string>;
  compareElement?: TriggerElement | Window;
  compareElementPos?: ElementCoords;
  applyToElementId?: string;
  applyToElement?: HTMLElement;
  pos?: ElementCoords;
  triggered: boolean;
  triggeredAtPos: ElementCoords;
  triggeredAtPreviousPos: ElementCoords;
  constructor(el?: HTMLElement) {
    super();
    if (el) {
      for (let key in el) {
        this[key] = el[key];
      }
    }
  }
}


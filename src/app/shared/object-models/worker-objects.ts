/*

export class BackgroundImageEnum {
  public servers;
  public fingers;
}

export class Background {
  constructor(private bgImage: BackgroundImageEnum) {

  }

  private servers: boolean;
  private fingers: boolean;
  private selectedImage: BackgroundImageEnum;

  setImage() {
    
  }

  getImageName(): BackgroundImageEnum {

  }

  isServer(): boolean {

  }

  isFingers(): boolean {
    return this.selectedImage === this.bgImage.fingers;
  }


}




private backgroundImage: any = {
  servers: true,
  fingers: false,
  setBg(bg: string) {
    this.servers = false;
    this.fingers = false;
    switch (bg) {
      case 'servers': {
        this.servers = true;
        break;
      }
      case 'fingers': {
        this.fingers = true;
        break;
      }
    };
  },
  1() {
    return this.backgroundImage.servers;
  },
  getBg() {
    if (this.servers) {
      return 'servers';
    }
    else if (this.fingers) {
      return 'fingers';
    }
    else {
      return null;
    }
  },
  getBgObject() {
    return {
      servers: this.servers, 
      fingers: this.fingers
    }
  }
};

*/
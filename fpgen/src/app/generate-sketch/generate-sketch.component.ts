import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { fabric } from 'fabric';
import { Line, Object } from 'fabric/fabric-impl';

@Component({
  selector: 'app-generate-sketch',
  templateUrl: './generate-sketch.component.html',
  styleUrls: ['./generate-sketch.component.scss'],
})
export class GenerateSketchComponent implements OnInit {
  minuteSlideCheck: boolean = false;
  arrowColor = 'black';
  myCanvas: any;
  image = new Image();
  //url: string;
  isCanvasDrawn: boolean = true;
  canvas: any;
  polygon: any;
  isImageDrawn: boolean = false;
  isPolygonDrawn: boolean = false;
  points: any[] = [];
  newPt: any;

  fromx!: number;
  fromy!: number;

  gpu: boolean = false;
  constructor() {}

  ngOnInit(): void {
    this.canvas = new fabric.Canvas('canvasID', { fireRightClick: true });

    // this.polygon = new fabric.Polygon(this.points, {
    //   left: 0,
    //   top: 0,
    //   fill: 'rgba(255,0,0,0.1)',
    //   strokeWidth: 1,
    //   stroke: 'lightgrey',
    //   scaleX: 1,
    //   scaleY: 1,
    //   objectCaching: false,
    //   transparentCorners: false,
    //   cornerColor: 'blue',
    // });
    this.canvas.viewportTransform = [1, 0, 0, 1, 0, 0];
  }
  isDown!: boolean;
  line!: Object;
  public toggleMinuteChange(event: any) {
    this.minuteSlideCheck = !this.minuteSlideCheck;
  }

  public toggleGpuChange(event: any) {
  this.gpu = !this.gpu;
  }

  public generateArrowWithPoint(pointer: { x: number; y: number }) {
    this.isDown = true;
    // var pointer = this.canvas.getPointer(o.e);
    this.points = [pointer.x, pointer.y, pointer.x, pointer.y];

    let tox = pointer.x;
    let toy = pointer.y;
    this.fromx = tox - 10;
    this.fromy = toy - 10;
    //this.drawArrow(startX, startY, endX, endY);

    var angle = Math.atan2(toy - this.fromy, tox - this.fromx);

    var headlen = 3; // arrow head size

    // bring the line end back some to account for arrow head.
    tox = tox - headlen * Math.cos(angle);
    toy = toy - headlen * Math.sin(angle);

    // calculate the points.
    var newPoints = [
      {
        x: this.fromx, // start point
        y: this.fromy,
      },
      {
        x: this.fromx - (headlen / 4) * Math.cos(angle - Math.PI / 2),
        y: this.fromy - (headlen / 4) * Math.sin(angle - Math.PI / 2),
      },
      {
        x: tox - (headlen / 4) * Math.cos(angle - Math.PI / 2),
        y: toy - (headlen / 4) * Math.sin(angle - Math.PI / 2),
      },
      {
        x: tox - headlen * Math.cos(angle - Math.PI / 2),
        y: toy - headlen * Math.sin(angle - Math.PI / 2),
      },
      {
        x: tox + headlen * Math.cos(angle), // tip
        y: toy + headlen * Math.sin(angle),
      },
      {
        x: tox - headlen * Math.cos(angle + Math.PI / 2),
        y: toy - headlen * Math.sin(angle + Math.PI / 2),
      },
      {
        x: tox - (headlen / 4) * Math.cos(angle + Math.PI / 2),
        y: toy - (headlen / 4) * Math.sin(angle + Math.PI / 2),
      },
      {
        x: this.fromx - (headlen / 4) * Math.cos(angle + Math.PI / 2),
        y: this.fromy - (headlen / 4) * Math.sin(angle + Math.PI / 2),
      },
      {
        x: this.fromx,
        y: this.fromy,
      },
    ];

    this.line = new fabric.Polyline(newPoints, {
      fill: this.arrowColor, //'white',
      stroke: this.arrowColor, //'black',
      opacity: 1,
      strokeWidth: 1,
      originX: 'left',
      originY: 'top',
      selectable: true,
    });
    this.canvas.add(this.line);
  }
  public ngAfterViewInit() {
    this.canvas.on('mouse:down', (o: any) => {
      console.log('wefEW', this.minuteSlideCheck);
      if (this.minuteSlideCheck) {
        var pointer = this.canvas.getPointer(o.e);
        this.generateArrowWithPoint(pointer);
      }

      ////////////
      // var triangle = new fabric.Triangle({
      //   width: 10,
      //   height: 10,
      //   fill: 'black',
      //   left: pointer.x,
      //   top: pointer.y,
      //   angle: 200,
      // });

      //   var line = new fabric.Line(this.points, {
      //       strokeWidth: 2,
      //       fill: 'black',
      //       stroke: 'black',
      //       originX: 'left',
      //       originY: 'center',
      //     // left: 75,
      //     // strokeWidth: 1,
      //     // width: 1,
      //     // height: 1,
      //     // top: 70,
      //     // stroke: 'black',
      //   });

      // var objs = [line, triangle];

      // this.line  = new fabric.Group(objs);
      // this.line = new fabric.Line(this.points, {
      //   strokeWidth: 2,
      //   fill: 'black',
      //   stroke: 'black',
      //   originX: 'left',
      //   originY: 'center',
      // });
    });

    this.canvas.on('mouse:move', (o: any) => {
      if (!this.isDown) return;
      var pointer = this.canvas.getPointer(o.e);

      var startX = this.points[0];
      var startY = this.points[1];
      var x2 = pointer.x - startX;
      var y2 = pointer.y - startY;
      var r = Math.sqrt(x2 * x2 + y2 * y2);
      var angle = (Math.atan2(y2, x2) / Math.PI) * 180;

      angle = (angle % 360) + 180;

      // if (angle <= 22.5 || angle >= 337.5) {
      //   angle = 0;
      // } else if (angle <= 67.5) {
      //   angle = 45;
      // } else if (angle <= 112.5) {
      //   angle = 90;
      // } else if (angle <= 157.5) {
      //   angle = 135;
      // } else if (angle <= 202.5) {
      //   angle = 180;
      // } else if (angle <= 247.5) {
      //   angle = 225;
      // } else if (angle <= 292.5) {
      //   angle = 270;
      // } else if (angle < 337.5) {
      //   angle = 315;
      // }
      angle -= 180;

      var cosx = r * Math.cos((angle * Math.PI) / 180);
      var sinx = r * Math.sin((angle * Math.PI) / 180);

      this.line.set({
        angle: angle,
        // x2: cosx + startX,
        // y2: sinx + startY,
      });
      this.canvas.renderAll();
    });

    this.canvas.on('mouse:up', () => {
      this.isDown = false;
    });
    // this.canvas.on('mouse:up', (event: any) => {
    //   console.log('MOUSE UP');
    //   var pointer = this.canvas.getPointer(event.e);
    //   let tox = pointer.x;
    //   let toy = pointer.y;
    //   //this.drawArrow(startX, startY, endX, endY);

    //   var angle = Math.atan2(toy - this.fromy, tox - this.fromx);
    //   tox = this.fromx+ 4;
    //   toy = this.fromy + angle * 4;
    //   console.log("ANGEL: ", angle)
    //   var headlen = 10; // arrow head size

    //   // bring the line end back some to account for arrow head.
    //   tox = tox - headlen * Math.cos(angle);
    //   toy = toy - headlen * Math.sin(angle);

    //   // calculate the points.
    //   var points = [
    //     {
    //       x: this.fromx, // start point
    //       y: this.fromy,
    //     },
    //     {
    //       x: this.fromx - (headlen / 4) * Math.cos(angle - Math.PI / 2),
    //       y: this.fromy - (headlen / 4) * Math.sin(angle - Math.PI / 2),
    //     },
    //     {
    //       x: tox - (headlen / 4) * Math.cos(angle - Math.PI / 2),
    //       y: toy - (headlen / 4) * Math.sin(angle - Math.PI / 2),
    //     },
    //     {
    //       x: tox - headlen * Math.cos(angle - Math.PI / 2),
    //       y: toy - headlen * Math.sin(angle - Math.PI / 2),
    //     },
    //     {
    //       x: tox + headlen * Math.cos(angle), // tip
    //       y: toy + headlen * Math.sin(angle),
    //     },
    //     {
    //       x: tox - headlen * Math.cos(angle + Math.PI / 2),
    //       y: toy - headlen * Math.sin(angle + Math.PI / 2),
    //     },
    //     {
    //       x: tox - (headlen / 4) * Math.cos(angle + Math.PI / 2),
    //       y: toy - (headlen / 4) * Math.sin(angle + Math.PI / 2),
    //     },
    //     {
    //       x: this.fromx - (headlen / 4) * Math.cos(angle + Math.PI / 2),
    //       y: this.fromy - (headlen / 4) * Math.sin(angle + Math.PI / 2),
    //     },
    //     {
    //       x: this.fromx,
    //       y: this.fromy,
    //     },
    //   ];

    //   var pline = new fabric.Polyline(points, {
    //     fill: 'black', //'white',
    //     stroke: 'black', //'black',
    //     opacity: 1,
    //     strokeWidth: 1,
    //     originX: 'left',
    //     originY: 'top',
    //     selectable: true,
    //   });

    //   this.canvas.add(pline);

    //   // this.isDown = false;
    //   // this.canvas.off('mouse:down').off('mouse:move').off('mouse:up');

    //   this.canvas.renderAll();
    // });

    // this.canvas.on('mouse:down', (event: any) => {
    //   console.log('MOUSE down');
    //   var pointer = this.canvas.getPointer(event.e);
    //   this.fromx = pointer.x;
    //   this.fromy = pointer.y;
    //   // this.generateArrow()
    // });
  }
  getClickCoords(event: any) {
    if (this.isCanvasDrawn && this.isImageDrawn) {
      this.newPt = {
        x: event.layerX,
        y: event.layerY,
      };
      // this.points.push(this.newPt);
      this.canvas.add(this.polygon);
    }
  }
  url!: string;
  public selectFile(event: any) {
    var canvas = this.canvas;
    if (event.target.files) {
      var reader = new FileReader();
      let file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = (event: any) => {
        this.url = event.target.result;
        // this.canvas.setHeight(720);
        // this.canvas.setWidth(1280);
        fabric.Image.fromURL(this.url, function (img: any) {
          canvas.setBackgroundImage(img, canvas.renderAll.bind(canvas), {
            scaleX: canvas.width / img.width,
            scaleY: canvas.height / img.height,
            opacity: 0.4,
          });
        });
      };
      this.isImageDrawn = true;
    }
  }
  public generateArrow() {
    this.generateArrowWithPoint({
      x: this.canvas.width / 2,
      y: this.canvas.height / 2,
    });
    // console.log('FREGERGddd');

    // var triangle = new fabric.Triangle({
    //   width: 10,
    //   height: 15,
    //   fill: this.arrowColor,
    //   left: 50,
    //   top: 10,
    //   angle: 90,
    // });

    // var line = new fabric.Line([50, 10, 200, 10], {
    //   left: 75,
    //   strokeWidth: 1,
    //   width: 1,
    //   height: 1,
    //   top: 70,
    //   stroke: 'black',
    // });

    // var objs = [line, triangle];

    // var alltogetherObj = new fabric.Group(objs);
    // this.canvas.add(alltogetherObj);
  }
  public saveBtn($event: any) {
    // saveAs($event, 'image.jpg');
    //TODO: call backend server
  }
  ChangeColorToBlack() {
    this.arrowColor = 'black';
  }
  ChangeColorToWhite() {
    this.arrowColor = 'white';
  }
  deleteSelectedObjects() {
    if (this.canvas.getActiveObject()) {
      this.canvas.getActiveObjects().forEach( (element:any) => {
      this.canvas.remove(element);
      });

    }
  }
}

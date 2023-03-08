import { Component, ElementRef, Inject, Input, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { imageListItem } from '../models/image-list-item';
import { CanvasDisplayService } from '../services/canvas-display.service';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss']
})
export class PopUpComponent {
  
  @Input()
  model!: string;

  @ViewChild('canvas') 
  private canvasRef!: ElementRef;

  @ViewChild('test')
  private testRef!: ElementRef;

  private get canvas(): HTMLCanvasElement {
    return this.canvasRef.nativeElement;
  }

  constructor(
    public dialogRef: MatDialogRef<PopUpComponent>,
    @Inject(MAT_DIALOG_DATA) public data: imageListItem,
    private canvasDisplayService : CanvasDisplayService
  ) {}

  onClick(): void {
    this.dialogRef.close();
  }

  ngAfterViewInit() {
    // console.log("test == "+this.test);
    console.log("test == "+this.canvas);
    this.canvasDisplayService.createScene('assets/models/fan.glb', this.canvas);
    this.canvasDisplayService.startRenderingLoop(this.canvas);
    this.canvasDisplayService.createControls(this.canvas);
  }
}

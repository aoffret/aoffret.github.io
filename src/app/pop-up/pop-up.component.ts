import { Component, ElementRef, Inject, Input, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { imageListItem } from '../models/image-list-item';
import { CanvasDisplayService } from '../services/canvas-display.service';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss'],
})
export class PopUpComponent {
  @Input()
  model!: string;

  @ViewChild('rendererCanvas')
  public rendererCanvas!: ElementRef<HTMLCanvasElement>;

  constructor(
    public dialogRef: MatDialogRef<PopUpComponent>,
    @Inject(MAT_DIALOG_DATA) public data: imageListItem,
    private canvasDisplayService: CanvasDisplayService
  ) {}

  onClick(): void {
    this.dialogRef.close();
  }

  public ngAfterViewInit(): void {
    if (!this.data.logo) {
      this.canvasDisplayService.createScene(
        this.rendererCanvas,
        this.data.model
      );
      this.canvasDisplayService.animate();
    }
  }
}

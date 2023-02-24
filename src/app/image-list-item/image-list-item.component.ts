import { Component, Input, Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { imageListItem } from '../models/image-list-item';
import { PopUpComponent } from '../pop-up/pop-up.component';

@Component({
  selector: 'app-image-list-item',
  templateUrl: './image-list-item.component.html',
  styleUrls: ['./image-list-item.component.scss']
})
export class ImageListItemComponent {

  @Input()
  image!: imageListItem;

  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(PopUpComponent, {
      data: {caption: this.image.caption, model: this.image.model, title: this.image.title},
    });
  }
}

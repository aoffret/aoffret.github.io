import { Component, Input } from '@angular/core';
import { ImageListItem } from '../models/image-list-item';

@Component({
  selector: 'app-image-list-item',
  templateUrl: './image-list-item.component.html',
  styleUrls: ['./image-list-item.component.scss']
})
export class ImageListItemComponent {

  @Input()
  image?: ImageListItem;
}

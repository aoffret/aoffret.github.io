import { Component, Input } from '@angular/core';
import { ImageListItem } from '../models/image-list-item';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {

  @Input()
  images: ImageListItem[] = [];
}

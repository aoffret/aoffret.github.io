import { Component } from '@angular/core';
import { ImageListItem } from '../models/image-list-item';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent {

  images!: ImageListItem[];

  ngOnInit() {
    this.images = [
      {
        src: 'https://picsum.photos/200',
        caption: 'BOUH!',
      },
    ];
  }
}

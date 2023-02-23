import { Component } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent {

  gallery!: string[];

  ngOnInit() {
    this.gallery = [
      "/assets/Moi.png",
      "/assets/Moi.png"
    ];
  }
}

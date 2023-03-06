import { Component, OnInit } from '@angular/core';
import { imageListItem } from '../models/image-list-item';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  game!: imageListItem[];
  personnal!: imageListItem[];
  graphic!: imageListItem[];

  ngOnInit() {
    this.game = [
      {
        src: "assets/game/City.png",
        caption: 'BOUH!',
        model: '/asset/model',
        title: 'caca',
        logo: false
      },
      {
        src: "assets/game/M2.png",
        caption: 'BOUH!',
        model: '/asset/model',
        title: 'caca',
        logo: false
      },
      {
        src: "assets/game/HappyFace.png",
        caption: 'BOUH!',
        model: '/asset/model',
        title: 'caca',
        logo: false
      },
      {
        src: "assets/game/M1.png",
        caption: 'BOUH!',
        model: '/asset/model',
        title: 'caca',
        logo: false
      },{
        src: "assets/game/Face.png",
        caption: 'BOUH!',
        model: '/asset/model',
        title: 'caca',
        logo: false
      },
      {
        src: "assets/game/M3.png",
        caption: 'BOUH!',
        model: '/asset/model',
        title: 'caca',
        logo: false
      },{
        src: "assets/game/Pixel.png",
        caption: 'BOUH!',
        model: '/asset/model',
        title: 'caca',
        logo: false
      },
    ];

    this.personnal = [
      {
        src: "assets/personnal/Guy.png",
        caption: 'BOUH!',
        model: '/asset/model',
        title: 'caca',
        logo: false
      },
      {
        src: "assets/personnal/Me.png",
        caption: 'BOUH!',
        model: '/asset/model',
        title: 'caca',
        logo: false
      },
      {
        src: "assets/personnal/Dog.png",
        caption: 'BOUH!',
        model: '/asset/model',
        title: 'caca',
        logo: false
      },
      {
        src: "assets/personnal/CardBoard.png",
        caption: 'BOUH!',
        model: '/asset/model',
        title: 'caca',
        logo: false
      },
      {
        src: "assets/personnal/Car.png",
        caption: 'BOUH!',
        model: '/asset/model',
        title: 'caca',
        logo: false
      },
      {
        src: "assets/personnal/Dino.png",
        caption: 'BOUH!',
        model: '/asset/model',
        title: 'caca',
        logo: false
      },
      {
        src: "assets/personnal/Skull.png",
        caption: 'BOUH!',
        model: '/asset/model',
        title: 'caca',
        logo: false
      },
    ];

    this.graphic = [
      {
        src: "assets/graphic/Snape.png",
        caption: 'BOUH!',
        model: '/assets/graphic/Snape.png',
        title: 'caca',
        logo: true
      },
      {
        src: "assets/graphic/GM.png",
        caption: 'BOUH!',
        model: '/assets/graphic/GM.png',
        title: 'caca',
        logo: true
      },
      {
        src: "assets/graphic/Mateo.png",
        caption: 'BOUH!',
        model: 'assets/graphic/Mateo.png',
        title: 'caca',
        logo: true
      },
      {
        src: "assets/graphic/Book.png",
        caption: 'BOUH!',
        model: "assets/graphic/Book.png",
        title: 'caca',
        logo: true
      },
    ];
  }
}

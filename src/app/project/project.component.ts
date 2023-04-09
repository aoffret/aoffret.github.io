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
        caption: "For one of the games, I had to create assets for an entire city. The building where made using box modelling, flat texturing and one common material. Every other building is a variation of the previous one. For the citizen, I modified assets already owned by the company to make them fit the context and needs of the game. The game needed animation so I had to mix and modified already existing animation or create new one to fit our purpose.",
        model: 'assets/models/City-Assets.glb',
        title: 'City assets',
        logo: false
      },
      {
        src: "assets/game/M2.png",
        caption: "I created 3D assets to fit a medieval hyper-casual mobile game. The assets needed to be in 3 different time periods. The chosen time periods were Pre-historical, Romain and Middle ages. Each period had to have 7 types of building(Farm, Archer tower, Stable, House, Mage tower, Harbor and Catapult site), 2 types of vehicle( Catapult and Boats), and 4 types of unit (Farmer, Soldier, Archer and Mage). There were also 3 units and buildings that were in-temporal. The unit character was created and then fitted with a proper rig, and then all the weapons, clothes, and equipment were added to the rig. All the animations were compiled on the same model to reduce the weight of the file and simplify the work on the programming side.",
        model: 'assets/models/Medieval-Asset-2.glb',
        title: 'Medieval asset',
        logo: false
      },
      {
        src: "assets/game/HappyFace.png",
        caption: "This asset was made for a mobile game. I wanted the model to be in a 'Disney' style. After gathering references and drawing the face I used 3D sculpting techniques to create the desired face and look. Because of the limitation of smartphones, the polycount had to be brought down. During this step, I made sure to follow the proper topology to ensure the proper behaviours of the model in the animation step. The model was then fitted with a rig and animated using multiple techniques.",
        model: 'assets/models/Face-Model.gltf',
        title: 'Face model',
        logo: false
      },
      {
        src: "assets/game/M1.png",
        caption: "I created 3D assets to fit a medieval hyper-casual mobile game. The assets needed to be in 3 different time periods. The chosen time periods were Pre-historical, Romain and Middle ages. Each period had to have 7 types of building(Farm, Archer tower, Stable, House, Mage tower, Harbor and Catapult site), 2 types of vehicle( Catapult and Boats), and 4 types of unit (Farmer, Soldier, Archer and Mage). There were also 3 units and buildings that were in-temporal. The unit character was created and then fitted with a proper rig, and then all the weapons, clothes, and equipment were added to the rig. All the animations were compiled on the same model to reduce the weight of the file and simplify the work on the programming side.",
        model: 'assets/models/Medieval-Asset-1.glb',
        title: 'Medieval asset',
        logo: false
      },
      {
        src: "assets/game/Face.png",
        caption: "This model was inspired by 'One-Armed Monstrosity' from Gravity Falls. The specificity of the model is that there is only a head and a hand. This was challenging in the modelling stage but predominantly in the rigging and animation steps. Because the only features of the model are his face and his hand, greater care was put into the facial animation to convey all the feedback necessary.",
        model: 'assets/models/One-Armed-Monstrosity.glb',
        title: 'Cartoon head',
        logo: false
      },
      {
        src: "assets/game/M3.png",
        caption: "I created 3D assets to fit a medieval hyper-casual mobile game. The assets needed to be in 3 different time periods. The chosen time periods were Pre-historical, Romain and Middle ages. Each period had to have 7 types of building(Farm, Archer tower, Stable, House, Mage tower, Harbor and Catapult site), 2 types of vehicle( Catapult and Boats), and 4 types of unit (Farmer, Soldier, Archer and Mage). There were also 3 units and buildings that were in-temporal. The unit character was created and then fitted with a proper rig, and then all the weapons, clothes, and equipment were added to the rig. All the animations were compiled on the same model to reduce the weight of the file and simplify the work on the programming side.",
        model: 'assets/models/Medieval-Asset-3.glb',
        title: 'Medieval asset',
        logo: false
      },
      {
        src: "assets/game/Pixel.png",
        caption: "During my last year of University, I made an FPS 3D Rogue in space with a procedurally generated spaceship. Each room was modelled and textured with 3ds Max and Photoshop. They were then implemented in Unity to make the room generation system. I then modelled, textured and animated the enemy and weapon. The chosen aesthetic was pixel art for the texturing. This aesthetic allowed me a quick texturing and gave me a good introduction to texturing and UVs",
        model: 'assets/models/Pixel-Game-Assets.glb',
        title: 'Pixel Game',
        logo: false
      },
    ];

    this.personnal = [
      {
        src: "assets/personnal/Guy.png",
        caption: 'BOUH!',
        model: 'assets/models/fan.glb',
        title: 'caca',
        logo: false
      },
      {
        src: "assets/personnal/Me.png",
        caption: 'BOUH!',
        model: 'assets/models/fan.glb',
        title: 'caca',
        logo: false
      },
      {
        src: "assets/personnal/Dog.png",
        caption: 'BOUH!',
        model: 'assets/models/fan.glb',
        title: 'caca',
        logo: false
      },
      {
        src: "assets/personnal/CardBoard.png",
        caption: 'BOUH!',
        model: 'assets/models/fan.glb',
        title: 'caca',
        logo: false
      },
      {
        src: "assets/personnal/Car.png",
        caption: 'BOUH!',
        model: 'assets/models/fan.glb',
        title: 'caca',
        logo: false
      },
      {
        src: "assets/personnal/Dino.png",
        caption: 'BOUH!',
        model: 'assets/models/fan.glb',
        title: 'caca',
        logo: false
      },
      {
        src: "assets/personnal/Skull.png",
        caption: 'BOUH!',
        model: 'assets/models/fan.glb',
        title: 'caca',
        logo: false
      },
    ];

    this.graphic = [
      {
        src: "assets/graphic/Snape.png",
        caption: 'BOUH!',
        model: 'assets/graphic/Snape.png',
        title: 'Logo Snape burger',
        logo: true
      },
      {
        src: "assets/graphic/GM.png",
        caption: 'BOUH!',
        model: 'assets/graphic/GM.png',
        title: 'caca',
        logo: true
      },
      {
        src: "assets/graphic/Mateo.png",
        caption: 'BOUH!',
        model: 'assets/graphic/Mateo.png',
        title: 'Logo MATEO',
        logo: true
      },
      {
        src: "assets/graphic/Book.png",
        caption: 'BOUH!',
        model: "assets/graphic/Book.png",
        title: 'Logo Book',
        logo: true
      },
    ];
  }
}


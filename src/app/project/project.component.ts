import { Component, OnInit } from '@angular/core';
import { imageListItem } from '../models/image-list-item';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent implements OnInit {
  game!: imageListItem[];
  personnal!: imageListItem[];
  graphic!: imageListItem[];

  ngOnInit() {
    this.game = [
      {
        src: 'assets/game/City.png',
        caption:
          'For one of the games, I had to create assets for an entire city. The building where made using box modelling, flat texturing and one common material. Every other building is a variation of the previous one. For the citizen, I modified assets already owned by the company to make them fit the context and needs of the game. The game needed animation so I had to mix and modified already existing animation or create new one to fit our purpose.',
        model: 'assets/models/City-Assets.glb',
        title: 'City assets',
        logo: false,
      },
      {
        src: 'assets/game/M2.png',
        caption:
          'I created 3D assets to fit a medieval hyper-casual mobile game. The assets needed to be in 3 different time periods. The chosen time periods were Pre-historical, Romain and Middle ages. Each period had to have 7 types of building(Farm, Archer tower, Stable, House, Mage tower, Harbor and Catapult site), 2 types of vehicle( Catapult and Boats), and 4 types of unit (Farmer, Soldier, Archer and Mage). There were also 3 units and buildings that were in-temporal. The unit character was created and then fitted with a proper rig, and then all the weapons, clothes, and equipment were added to the rig. All the animations were compiled on the same model to reduce the weight of the file and simplify the work on the programming side.',
        model: 'assets/models/Medieval-Asset-2.glb',
        title: 'Medieval asset',
        logo: false,
      },
      {
        src: 'assets/game/HappyFace.png',
        caption:
          "This asset was made for a mobile game. I wanted the model to be in a 'Disney' style. After gathering references and drawing the face I used 3D sculpting techniques to create the desired face and look. Because of the limitation of smartphones, the polycount had to be brought down. During this step, I made sure to follow the proper topology to ensure the proper behaviours of the model in the animation step. The model was then fitted with a rig and animated using multiple techniques.",
        model: 'assets/models/Face-Model.glb',
        title: 'Face model',
        logo: false,
      },
      {
        src: 'assets/game/M1.png',
        caption:
          'I created 3D assets to fit a medieval hyper-casual mobile game. The assets needed to be in 3 different time periods. The chosen time periods were Pre-historical, Romain and Middle ages. Each period had to have 7 types of building(Farm, Archer tower, Stable, House, Mage tower, Harbor and Catapult site), 2 types of vehicle( Catapult and Boats), and 4 types of unit (Farmer, Soldier, Archer and Mage). There were also 3 units and buildings that were in-temporal. The unit character was created and then fitted with a proper rig, and then all the weapons, clothes, and equipment were added to the rig. All the animations were compiled on the same model to reduce the weight of the file and simplify the work on the programming side.',
        model: 'assets/models/Medieval-Asset-1.glb',
        title: 'Medieval asset',
        logo: false,
      },
      // {
      //   src: 'assets/game/Face.png',
      //   caption:
      //     "This model was inspired by 'One-Armed Monstrosity' from Gravity Falls. The specificity of the model is that there is only a head and a hand. This was challenging in the modelling stage but predominantly in the rigging and animation steps. Because the only features of the model are his face and his hand, greater care was put into the facial animation to convey all the feedback necessary.",
      //   model: 'assets/models/One-Armed-Monstrosity.glb',
      //   title: 'Cartoon head',
      //   logo: false,
      // },
      {
        src: 'assets/game/Pixel.png',
        caption:
          'During my last year of University, I made an FPS 3D Rogue in space with a procedurally generated spaceship. Each room was modelled and textured with 3ds Max and Photoshop. They were then implemented in Unity to make the room generation system. I then modelled, textured and animated the enemy and weapon. The chosen aesthetic was pixel art for the texturing. This aesthetic allowed me a quick texturing and gave me a good introduction to texturing and UVs',
        model: 'assets/models/Pixel-Game-Assets.glb',
        title: 'Pixel Game',
        logo: false,
      },
      {
        src: 'assets/game/M3.png',
        caption:
          'I created 3D assets to fit a medieval hyper-casual mobile game. The assets needed to be in 3 different time periods. The chosen time periods were Pre-historical, Romain and Middle ages. Each period had to have 7 types of building(Farm, Archer tower, Stable, House, Mage tower, Harbor and Catapult site), 2 types of vehicle( Catapult and Boats), and 4 types of unit (Farmer, Soldier, Archer and Mage). There were also 3 units and buildings that were in-temporal. The unit character was created and then fitted with a proper rig, and then all the weapons, clothes, and equipment were added to the rig. All the animations were compiled on the same model to reduce the weight of the file and simplify the work on the programming side.',
        model: 'assets/models/Medieval-Asset-3.glb',
        title: 'Medieval asset',
        logo: false,
      },
    ];

    this.personnal = [
      {
        src: 'assets/personnal/Guy.png',
        caption:
          'This series of 3D models were created to challenge me and to test my Texturing and UV skills. The pixel art medium is greatly limiting and forces the artist to create complex visuals with little information. While creating these models I choose to go toward box modelling and low poly to accentuate the pixel art aesthetic. Each model challenges my 3D skills in different ways. The humanoid model, with organic modelling and placing details on a model. The dog with low poly animation and texturing. The car with texture animation and non-organic modelling.',
        model: 'assets/models/Dyst-Guy.glb',
        title: 'Pixel art',
        logo: false,
      },
      {
        src: 'assets/personnal/Me.png',
        caption:
          'I modelled, Textured, Rigged, Skinned and Animated a character with Blender. I use topologies and other modelling techniques to create this model. This model possesses Shape Keys, firstly to correct any error the rig may do, secondly to be able to do lip sinc with a phoneme chart.',
        model: 'assets/models/FramePose.glb',
        title: 'Autoportrait',
        logo: false,
      },
      {
        src: 'assets/personnal/Dog.png',
        caption:
          'This series of 3D models were created to challenge me and to test my Texturing and UV skills. The pixel art medium is greatly limiting and forces the artist to create complex visuals with little information. While creating these models I choose to go toward box modelling and low poly to accentuate the pixel art aesthetic. Each model challenges my 3D skills in different ways. The humanoid model, with organic modelling and placing details on a model. The dog with low poly animation and texturing. The car with texture animation and non-organic modelling.',
        model: 'assets/models/Dog.glb',
        title: 'Pixel art',
        logo: false,
      },
      {
        src: 'assets/personnal/CardBoard.png',
        caption:
          'The following models are 3 models all following the same theme, Cardboard. Those models were a collection made to resemble as much as possible creations made out of cardboard.',
        model: 'assets/models/Cardboard.glb',
        title: 'Cardboard models',
        logo: false,
      },
      {
        src: 'assets/personnal/Car.png',
        caption:
          'This series of 3D models were created to challenge me and to test my Texturing and UV skills. The pixel art medium is greatly limiting and forces the artist to create complex visuals with little information. While creating these models I choose to go toward box modelling and low poly to accentuate the pixel art aesthetic. Each model challenges my 3D skills in different ways. The humanoid model, with organic modelling and placing details on a model. The dog with low poly animation and texturing. The car with texture animation and non-organic modelling.',
        model: 'assets/models/Car.glb',
        title: 'Pixel art',
        logo: false,
      },
      {
        src: 'assets/personnal/Dino.png',
        caption:
          'This 3D Model is made of multiple elements. There are 2 dinosaur models that are the main focus. The design was inspired by drawings of Floofyfluff. I used different sculpting techniques to have the desired shape and re-topologies them to save polygons. I then texture-painted the model to give them their distinctive looks. For the beach scene, I use box modelling, flat textures and material properties to gather everything together.',
        model: 'assets/models/Dino.glb',
        title: 'Dino model',
        logo: false,
      },
      {
        src: 'assets/personnal/Skull.png',
        caption:
          "This model is a simple tribute to the early 2000s Lego games. The skull was made following lego's guidelines for manufacturing pieces. The piece was then fitted with the proper texture and I added a background and overall aesthetic reminiscing of the 2005 Star Wars Lego character selection screen.",
        model: 'assets/models/Skeleton.glb',
        title: 'LEGO Skull',
        logo: false,
      },
    ];

    this.graphic = [
      {
        src: 'assets/graphic/Snape.png',
        caption:
          'In university, I created 2 fake companies. This exercise help me visualise and put to paper ideas that came to mind. For one of the companies, we had to create only the visual for it, a brand name, a logo, a poster, and an ad. For the second one, the creation was much more thorough, I made market research, a business model, a design, and a high-fidelity prototype for mobile and website.',
        model: 'assets/graphic/Snape.png',
        title: 'Severus Snacks',
        logo: true,
      },
      {
        src: 'assets/graphic/GM.png',
        caption:
          'As a freelance Graphic designer, I add to conduct multiple projects and create logos, graphic charts, and user interfaces and I successfully completed multiple missions with a high customer satisfaction rate.',
        model: 'assets/graphic/GM.png',
        title: 'Freelance logo',
        logo: true,
      },
      {
        src: 'assets/graphic/Mateo.png',
        caption:
          'As a freelance Graphic designer, I add to conduct multiple projects and create logos, graphic charts, and user interfaces and I successfully completed multiple missions with a high customer satisfaction rate.',
        model: 'assets/graphic/Mateo.png',
        title: 'MATEO freelance',
        logo: true,
      },
      {
        src: 'assets/graphic/Book.png',
        caption:
          'In university, I created 2 fake companies. This exercise help me visualise and put to paper ideas that came to mind. For one of the companies, we had to create only the visual for it, a brand name, a logo, a poster, and an ad. For the second one, the creation was much more thorough, I made market research, a business model, a design, and a high-fidelity prototype for mobile and website.',
        model: 'assets/graphic/Book.png',
        title: 'Book-it',
        logo: true,
      },
    ];
  }
}

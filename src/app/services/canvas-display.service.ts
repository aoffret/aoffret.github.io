import { Input, Injectable, NgZone, ElementRef } from '@angular/core';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { CSS2DRenderer } from 'three/examples/jsm/renderers/CSS2DRenderer.js';

@Injectable({
  providedIn: 'root',
})
export class CanvasDisplayService {
  private canvas!: HTMLCanvasElement;
  private renderer!: THREE.WebGLRenderer;

  private camera!: THREE.PerspectiveCamera;
  private scene!: THREE.Scene;
  private controls!: OrbitControls;

  private light!: THREE.AmbientLight;
  private light1!: THREE.PointLight;
  private light2!: THREE.PointLight;
  private light3!: THREE.PointLight;
  private light4!: THREE.PointLight;
  private directionalLight!: THREE.DirectionalLight;

  private frameId!: number;

  public constructor(private ngZone: NgZone) {}

  public createScene(
    canvas: ElementRef<HTMLCanvasElement>,
    modelDisplay: any
  ): void {
    // The first step is to get the reference of the canvas element from our HTML document
    this.canvas = canvas.nativeElement;
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      alpha: true, // transparent background
      antialias: true, // smooth edges
    });
    this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight);

    // create the scene
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(
      75,
      this.canvas.clientWidth / this.canvas.clientHeight,
      0.1,
      1000
    );
    this.camera.position.x = 5;
    this.camera.position.y = 5;
    this.camera.position.z = 5;
    // this.camera.position.z = 5;
    this.scene.add(this.camera);

    this.createLights();

    this.loadModel(modelDisplay);

    this.createControls(this.canvas);
  }

  private createLights() {
    this.light = new THREE.AmbientLight(0x404040, 1);
    this.light.position.z = 10;
    this.scene.add(this.light);
    this.directionalLight = new THREE.DirectionalLight(0x404040);
    this.directionalLight.position.set(0, 1, 0);
    this.directionalLight.castShadow = true;
    this.scene.add(this.directionalLight);
    this.light1 = new THREE.PointLight(0x404040);
    this.light1.position.set(0, 200, 400);
    this.scene.add(this.light1);
    this.light2 = new THREE.PointLight(0x404040);
    this.light2.position.set(500, 100, 0);
    this.scene.add(this.light2);
    this.light3 = new THREE.PointLight(0x404040);
    this.light3.position.set(0, 100, -500);
    this.scene.add(this.light3);
    this.light4 = new THREE.PointLight(0x404040);
    this.light4.position.set(-500, 300, 500);
    this.scene.add(this.light4);
  }

  private loadModel(modelDisplay: any) {
    const loader = new GLTFLoader();
    loader.load(
      modelDisplay,
      (gltf) => {
        this.scene.add(gltf.scene);
      },
      undefined,
      function (error) {
        console.error(error);
      }
    );
  }

  private createControls = (canva: any) => {
    const renderer = new CSS2DRenderer();
    renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight);
    renderer.domElement.style.position = 'absolute';
    renderer.domElement.style.top = '45px';
    document.getElementById('test')?.appendChild(renderer.domElement);

    this.controls = new OrbitControls(this.camera, renderer.domElement);
    this.controls.autoRotate = true;
    this.controls.enableZoom = true;
    this.controls.enablePan = false;
    this.controls.update();
  };

  public animate(): void {
    this.ngZone.runOutsideAngular(() => {
      if (document.readyState !== 'loading') {
        this.render();
      } else {
        window.addEventListener('DOMContentLoaded', () => {
          this.render();
        });
      }
    });
  }

  public render(): void {
    this.frameId = requestAnimationFrame(() => {
      this.render();
    });
    this.renderer.render(this.scene, this.camera);
  }
}

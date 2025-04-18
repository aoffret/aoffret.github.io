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
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.0; 
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
    this.light = new THREE.AmbientLight(0xffffff, 0.6);
    this.scene.add(this.light);

    // Hemisphere light for more natural ambient effect
    const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444, 0.6);
    hemiLight.position.set(0, 100, 0);
    this.scene.add(hemiLight);

    // Directional sunlight
    this.directionalLight = new THREE.DirectionalLight(0xfff8e7, 0.6);
    this.directionalLight.position.set(5, 10, 7.5);
    this.directionalLight.castShadow = true;
    this.scene.add(this.directionalLight);
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
    this.controls.autoRotateSpeed = 1.0; // slower than default
    this.controls.enableZoom = true;
    this.controls.zoomSpeed = 0.5;       // slower zoom
    this.controls.rotateSpeed = 0.4;     // slower rotation
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

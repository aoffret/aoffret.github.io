import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import * as THREE from 'three';
import { GLTFLoader, GLTF } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { CSS2DRenderer } from 'three/examples/jsm/renderers/CSS2DRenderer.js';
import { CanvasDisplayService } from '../services/canvas-display.service';


@Component({
  selector: 'app-canva',
  templateUrl: './canva.component.html',
  styleUrls: ['./canva.component.scss']
})
export class CanvaComponent implements OnInit, AfterViewInit {

  @Input()
  model!: string;

  @ViewChild('canvas') private canvasRef!: ElementRef;

  private get canvas(): HTMLCanvasElement {
    return this.canvasRef.nativeElement;
  }

  constructor(private canvasDisplayService : CanvasDisplayService) { }

  ngOnInit(): void {

  }

  ngAfterViewInit() {
    this.canvasDisplayService.createScene('assets/models/fan.glb', this.canvas);
    this.canvasDisplayService.startRenderingLoop(this.canvas);
    this.canvasDisplayService.createControls(this.canvas);
  }
  
}
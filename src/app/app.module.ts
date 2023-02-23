import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { PresentationComponent } from './presentation/presentation.component';
import { HttpClientModule } from '@angular/common/http';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { ProjectComponent } from './project/project.component';
import { GalleryComponent } from './gallery/gallery.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeaderComponent,
    PresentationComponent,
    ProjectComponent,
    GalleryComponent,
    
  ],
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,
    MatSidenavModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

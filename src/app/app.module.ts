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
import { ImageListItemComponent } from './image-list-item/image-list-item.component';
import { ContactComponent } from './contact/contact.component';
import { LinksComponent } from './links/links.component';
import { FooterComponent } from './footer/footer.component';
import { PopUpComponent } from './pop-up/pop-up.component';
import {MatDialogModule} from '@angular/material/dialog';
import { CanvaComponent } from './canva/canva.component';
import {ScrollingModule} from '@angular/cdk/scrolling';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeaderComponent,
    PresentationComponent,
    ProjectComponent,
    ImageListItemComponent,
    ContactComponent,
    LinksComponent,
    FooterComponent,
    PopUpComponent,
    CanvaComponent,
    
  ],
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,
    MatSidenavModule,
    MatToolbarModule,
    MatDialogModule,
    ScrollingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

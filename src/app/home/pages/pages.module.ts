import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { MainComponent } from './main/main.component';
import { HomeModule } from '../home.module';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ResumenComponent } from './resumen/resumen.component';


@NgModule({
  declarations: [
    MainComponent,
    AboutComponent,
    NavbarComponent,
    ResumenComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ],
  exports:[
    MainComponent,
    NavbarComponent
  ]
})
export class PagesModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ResumenComponent } from './resumen/resumen.component';

const routes: Routes = [
  {
    path: '',
    component: AboutComponent
  },
  {
    path: 'home',
    component: AboutComponent
  },
  {
    path: 'resume',
    component: ResumenComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }

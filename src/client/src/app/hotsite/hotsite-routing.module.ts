import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from "./pages/index/index.component";
import { MetodosComponent } from "./pages/metodos/metodos.component";
import { SobreComponent } from "./pages/sobre/sobre.component";
import { ArtigosComponent } from "./pages/artigos/artigos.component";

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
  },
  {
    path: 'sobre',
    component: SobreComponent,
  },
  {
    path: 'metodos',
    component: MetodosComponent,
  },
  {
    path: 'artigos',
    component: ArtigosComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class HotsiteRoutingModule { }

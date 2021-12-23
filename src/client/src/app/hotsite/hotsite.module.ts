import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotsiteRoutingModule } from './hotsite-routing.module';
import { IndexComponent } from './pages/index/index.component';
import { BaseComponent } from "./pages/base/base.component";
import { FormsModule } from "@angular/forms";
import { SobreComponent } from './pages/sobre/sobre.component';
import { ArtigosComponent } from './pages/artigos/artigos.component';
import { MetodosComponent } from './pages/metodos/metodos.component';
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  imports: [
    CommonModule,
    HotsiteRoutingModule,
    FormsModule,
    TranslateModule
  ],
  declarations: [IndexComponent, BaseComponent, SobreComponent, ArtigosComponent, MetodosComponent]
})
export class HotsiteModule  {
}

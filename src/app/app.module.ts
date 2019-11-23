import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TopoComponent } from './topo/topo.component';
import { ProgressoComponent } from './progresso/progresso.component';
import { PainelComponent } from './painel/painel.component';
import { TentativaComponent } from './tentativa/tentativa.component';

@NgModule({
  declarations: [
    AppComponent,
    TopoComponent,
    ProgressoComponent,
    PainelComponent,
    TentativaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

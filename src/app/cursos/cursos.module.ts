import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosListagemComponent } from './cursos-listagem/cursos-listagem.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    CursosListagemComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports:[CursosListagemComponent]
})
export class CursosModule { }

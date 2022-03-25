import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosListagemComponent } from './cursos-listagem/cursos-listagem.component';
import { CursosFormComponent } from './cursos-form/cursos-form.component';
import { CursosRoutingModule } from './cursos-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CursosListagemComponent,
    CursosFormComponent
  ],
  imports: [
    CommonModule,
    CursosRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[
    CursosListagemComponent,
    CursosFormComponent
  ]
})
export class CursosModule { }

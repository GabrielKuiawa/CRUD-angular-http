import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursosFormComponent } from './cursos-form/cursos-form.component';
import { CursosListagemComponent } from './cursos-listagem/cursos-listagem.component';

const routes: Routes = [
  {path:'', component: CursosListagemComponent},
  {path:'novo', component: CursosFormComponent},
  {path:'editar/id:', component: CursosFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }

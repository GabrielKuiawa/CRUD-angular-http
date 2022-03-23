import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursosFormComponent } from './cursos-form/cursos-form.component';
import { CursosListagemComponent } from './cursos-listagem/cursos-listagem.component';
import { CursoGuardGuard } from './guards/curso-guard.guard';

const routes: Routes = [
  {path:'', component: CursosListagemComponent},
  {path:'novo', component: CursosFormComponent,
   resolve: {
   curso: CursoGuardGuard
  }  
},
  {path:'editar/:id', component: CursosFormComponent,
   resolve: {
   curso: CursoGuardGuard
  }  
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }

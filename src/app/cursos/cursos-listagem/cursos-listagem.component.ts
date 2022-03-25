import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, empty, Observable } from 'rxjs';
import { Curso } from '../cursos';
import { CursosService } from '../cursos.service';
import { BsModalService } from 'ngx-bootstrap/modal'

@Component({
  selector: 'app-cursos-listagem',
  templateUrl: './cursos-listagem.component.html',
  styleUrls: ['./cursos-listagem.component.css'],
  preserveWhitespaces:true

})
export class CursosListagemComponent implements OnInit {

  cursos$!: Observable<Curso[]>

  constructor(
    private service:CursosService,
    private router:Router,
    private route:ActivatedRoute
    ) { }

  ngOnInit(): void {
    // this.service.list()
    // .subscribe(dados => this.cursos = dados);

    this.onRefresh();  

  }
  onRefresh() {
    this.cursos$ = this.service.list().pipe(
      // map(),
      // tap(),
      // switchMap(),
      catchError(error => {
        console.error(error);
        // this.error$.next(true);
        return empty();
      })
    );
  }
  onEdit(id:number){
    this.router.navigate(['editar', id],{ relativeTo:this.route});
  }
  onDelete(curso:Curso){
    this.service.remove(curso.id).subscribe(
      success => {
        console.log("tudo certo")
        this.onRefresh();
      } ,
      error => console.log("tudo errado")
    );  
  }  
}

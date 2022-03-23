import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Curso } from '../cursos';
import { CursosService } from '../cursos.service';

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

    this.cursos$ = this.service.list()

  }
  onEdit(id:number){
    this.router.navigate(['editar', id],{ relativeTo:this.route});
  }
}

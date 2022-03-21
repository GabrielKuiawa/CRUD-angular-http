import { Component, OnInit } from '@angular/core';
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

  constructor(private service:CursosService) { }

  ngOnInit(): void {
    // this.service.list()
    // .subscribe(dados => this.cursos = dados);

    this.cursos$ = this.service.list()

  }

}

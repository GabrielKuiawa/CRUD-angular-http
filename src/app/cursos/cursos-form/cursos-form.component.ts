import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CursosService } from '../cursos.service';
import { Location } from '@angular/common'
import { ActivatedRoute, Route, Router } from '@angular/router';


@Component({
  selector: 'app-cursos-form',
  templateUrl: './cursos-form.component.html',
  styleUrls: ['./cursos-form.component.css']
})
export class CursosFormComponent implements OnInit {

  form!:FormGroup;
  submitted = false;



  constructor(
    private fb: FormBuilder, 
    private service: CursosService, 
    private location: Location,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
    // let registro = null;

    // this.route.params
    // .pipe(
    //   map((params: any) => params['id']),
    //   switchMap( id => this.service.loadByID(id))
    // )
    // .subscribe(curso => this.updateForm(curso));  

    //console.log(registro);

 

    const curso = this.route.snapshot.data['curso'];

    this.form = this.fb.group({
      id: [curso.id],
      nome:[curso.nome,[Validators.required, Validators.minLength(3), Validators.maxLength(250)]]
    });
  }

  // updateForm(curso:any){
  //   this.form.patchValue({
  //     id:curso.id,
  //     nome: curso.nome
  //   })
  // }
  
  HasError(field:string){
    return this.form.get(field)?.errors;
  }

  onSubmit(){
    this.submitted = true;
    console.log(this.form.value);
    if(this.form.valid){
      console.log('submit');

      let msgSuccess = 'tudo ok';
      let msgError = 'tudo mal'
      if(this.form.value.id) {
        msgSuccess = 'tudo ok';
        msgError = 'tudo mal'

      }

      this.service.save(this.form.value).subscribe(
        success =>{
          console.log('success atualizar curso')
          this.router.navigate(['cursos'])

      },
        error => {console.log('erro atualizar curso')}
      );

      /*if(this.form.value.id){
        this.service.update(this.form.value).subscribe(
          success =>{
            this.location.back();
          },
          error => console.error(error),
          () => console.log('put tudo ok ')
        );
      }else{
        this.service.create(this.form.value).subscribe(
          success =>{
            console.log('success'),
            this.location.back();
          },
          error => console.error(error),
          () => console.log('tudo ok')
        );
      }*/
     
    }
  }
  onCancel(){
    this.submitted = false; 
    this.form.reset();
    this.router.navigate(['cursos'])
    //console.log('cancel');
  }


}

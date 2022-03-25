import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CrudService } from "../shared/crud-service";
import { Curso } from "./cursos";

@Injectable({
    providedIn:'root'
})
export class Cursos2Service extends CrudService<Curso>{

    constructor( protected override http : HttpClient){
        super(http,'http://localhost:3000/people');
    }
    // loadByID(id:number){
    //     return null;
    // }
}
import { HttpClient } from "@angular/common/http";
import { take, tap } from "rxjs";

export class CrudService<T>{

    constructor(
        protected http : HttpClient,
        private API_URl:any
        ){}

        list(){
        return this.http.get<T[]>(this. API_URl )
        .pipe(
          tap(console.log)
        );
        }
        loadByID(id:number){
          return this.http.get<T>(`${this.API_URl}/${id}`).pipe(take(1));
        };
        private create(record:T){
          return this.http.post(this.API_URl,record).pipe(take(1));
        }
        private update(record:T){
          return this.http.put(`${this.API_URl}/${record['id' as keyof T]}`, record).pipe(take(1));
        }
        save(record:T){
          if(record['id' as keyof T]){
            return this.update(record);
          }
          return this.create(record);
        }
        remove(id:number){
          return this.http.delete(`${this.API_URl}/${id}`).pipe(take(1));
        }

}
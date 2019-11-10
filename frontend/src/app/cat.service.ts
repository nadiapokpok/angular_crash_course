import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CatService {

  uri = 'http://localhost:4001';

  constructor(private http: HttpClient) { }

//on sollicite le serveur aux addresses suivantes

  getCats(){
    return this.http.get(`${this.uri}/cats`);
  }
  
  getCatById(id){
    return this.http.get(`${this.uri}/cats/${id}`);
  }

  addCat(name, age, sexe, description){
    const cat = {
      name: name,
      age: age,
      sexe: sexe,
      description: description
    };
    return this.http.post(`${this.uri}/cats/add`, cat)
  }

  updateCat(id, name, age, sexe, description){
    const cat = {
      name: name,
      age: age,
      sexe:sexe,
      description: description
     };
    return this.http.post(`${this.uri}/cats/update/${id}`, cat)
  }
deleteCat(id){
  return this.http.get(`${this.uri}/cats/delete/${id}`)
}

}

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Persona } from '../Modelo/Persona';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }
  Url='http://localhost:8098/personas';
  getPersonaId(){
    return this.http.get<Persona[]>(this.Url)
  }
  
  
  createPersona(person:Persona){
    return this.http.post<Persona>(this.Url,person);
  }


}

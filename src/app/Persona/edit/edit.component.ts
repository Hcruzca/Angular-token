import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/Modelo/Persona';
import{ServiceService} from '../../Service/service.service'

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit{

  personaUpdate : Persona= new Persona();
  constructor(private router:Router,private service:ServiceService){

  }
  ngOnInit(): void {
      this.Editar();
  }
  Editar(){
    let id=localStorage.getItem('id')!;
    this.service.getPersonaId(+id)
    .subscribe(data=>{
      this.personaUpdate=data;
      
  })
}
Actualizar(personaUpdate:Persona){
this.service.updatePersona(personaUpdate)
.subscribe(data=>{
  this.personaUpdate=data;
  alert("Se actulizo con Exito")
  this.router.navigate(["listar"]);
})
}
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{ServiceService} from '../../Service/service.service'
import { Persona } from 'src/app/Modelo/Persona';
@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit  {

   per:Persona[];

constructor(private service:ServiceService, private router:Router){}

ngOnInit(){

  this.service.getPersonas()
  .subscribe(data=>{
    this.per=data;
  })
}
Editar(personaUpdatehtml:Persona):void{
  localStorage.setItem("id",personaUpdatehtml.id.toString());
  this.router.navigate(["edit"]);
}

}

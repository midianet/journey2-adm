import { Component, OnInit } from '@angular/core';
import { PersonService } from '../person.service';
import { Router } from '@angular/router';
import { Person } from '../../model/Person';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css']
})
export class PersonFormComponent implements OnInit {

  filter : Person;

  constructor(private router: Router, private service: PersonService ) { 
    this.filter = this.service.filter;
  }

  ngOnInit() {
   // this.valor = this.service.valor;
  //  console.log('constructor ' + this.valor);
  }

  setValor() : void{
   // this.service.valor = this.valor;
  //  console.log('set ' + this.service.valor);
  }

}
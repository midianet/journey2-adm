import { Injectable } from '@angular/core';
import { Person } from '../model/Person';
import { Gender } from '../model/Gender';
import { State } from '../model/State';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  list : Array<Person> = [
      {id: 1,  name: "Marcos Fernando", gender: {id: "M", description : "Masculino"}, state : {id: "S", description : "Selecionado"}},
      {id: 2,  name: "Glauce Lima",     gender: {id: "F", description : "Feminino"},  state : {id: "A", description : "Associado"}},
      {id: 3,  name: "Maria Luisa",     gender: {id: "F", description : "Feminino"},  state : {id: "R", description : "Registrado"}},
      {id: 4,  name: "Marcos Fernando", gender: {id: "M", description : "Masculino"}, state : {id: "S", description : "Selecionado"}},
      {id: 5,  name: "Glauce Lima",     gender: {id: "F", description : "Feminino"},  state : {id: "A", description : "Associado"}},
      {id: 6,  name: "Maria Luisa",     gender: {id: "F", description : "Feminino"},  state : {id: "R", description : "Registrado"}},
      {id: 7,  name: "Marcos Fernando", gender: {id: "M", description : "Masculino"}, state : {id: "S", description : "Selecionado"}},
      {id: 8,  name: "Glauce Lima",     gender: {id: "F", description : "Feminino"},  state : {id: "A", description : "Associado"}},
      {id: 9,  name: "Maria Luisa",     gender: {id: "F", description : "Feminino"},  state : {id: "R", description : "Registrado"}},
      {id: 10, name: "Marcos Fernando", gender: {id: "M", description : "Masculino"}, state : {id: "S", description : "Selecionado"}},
      {id: 11, name: "Glauce Lima",     gender: {id: "F", description : "Feminino"},  state : {id: "A", description : "Associado"}},
      {id: 12, name: "Maria Luisa",     gender: {id: "F", description : "Feminino"},  state : {id: "R", description : "Registrado"}},

  ];

  genders : Array<Gender> = [
    {id : "M", description:"Masculino"},
    { id: "F", description: "Feminino"},
  ];

  states : Array<State> = [
    {id:'W', description : 'Candidato'},
    {id:'S', description : 'Selecionado'},
    {id:'A', description : 'Associado'},
    {id:'R', description : 'Registrado'},
    {id:'C', description : 'Confirmado'}
  ]

  filter : Person = new Person();

  constructor() { }
}

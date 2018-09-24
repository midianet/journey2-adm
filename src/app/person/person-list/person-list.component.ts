import { Component, OnInit, OnDestroy, ViewChild, AfterViewInit } from '@angular/core';
import { PersonService } from '../person.service';
import { Person } from '../../model/Person';
import { Router } from '@angular/router';
import { State } from '../../model/State';
import { Gender } from '../../model/Gender'
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit, OnDestroy, AfterViewInit {
  dtOptions: DataTables.Settings = {};
  filter: Person;
  list : Person[];

  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;

  dtTrigger: Subject<any> = new Subject();

  constructor(private router: Router, private service: PersonService ) {
    this.filter = this.service.filter;
    this.list   = this.service.list;
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 8,
      language: { 
        zeroRecords: 'Sem Registros',
        info: 'Mostrando página _PAGE_ de _PAGES_',
        infoEmpty : '',
        infoFiltered: " - filtrado de _MAX_ registros",
        paginate: { first: '«', previous: '‹', next: '›', last: '»' },
        processing: 'Processando...',
      },
      responsive : true,
      searching: false,
      lengthChange: false,
      stateSave : true,
    };
    this.dtTrigger.next();
  }

  ngOnInit() {

  }

  add() : void{
    this.list.push({ id: 13 , name : "Adicionado", gender: {id: "M", description : "Masculino"}, state : {id: "S", description : "Selecionado"}});
  }

  remove(person : Person, index : number) : void{
     this.dtElement.dtInstance.then((d: DataTables.Api) =>{
        this.list.forEach( (p, i) => {
          if(p === person) {
            this.list.splice(i,1);
            d.destroy();
            this.dtTrigger.next();
          }
      });
    });
  }

  edit(param : string ){
    console.log(param);
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  states() : Array<State>{
    return this.service.states;
  }

  genders() : Array<Gender>{
    return this.service.genders;
  }

  create() {
    this.router.navigate(['/pessoas/novo']);
  }

  ngAfterViewInit(): void {
    this.dtTrigger.next();
  }
  
}
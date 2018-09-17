import { Component, OnInit, AfterViewInit, ViewChild, OnDestroy, Renderer  } from '@angular/core';
import { PersonService } from '../person.service';
import { Person } from '../../model/Person';
import { Router } from '@angular/router';
import { State } from '../../model/State';
import { Gender } from '../../model/Gender';
import { Http, Response } from '@angular/http';
import { Subject } from 'rxjs'
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

import { DataTableDirective } from 'angular-datatables';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit , AfterViewInit {
  
  @ViewChild(DataTableDirective)
  datatableElement: DataTableDirective;

  dtOptions: DataTables.Settings = {};

  filter: Person;
  list : Person[];

  //dtTrigger Subject<any> = new Subject();

  constructor(private renderer: Renderer, private router: Router, private http: HttpClient, private service: PersonService ) {
      this.filter = this.service.filter;
      this.list   = this.service.list;
      this.dtOptions = {
         pagingType: 'full_numbers',
         pageLength: 9,
         language: { 
            zeroRecords: '',
            info: 'Mostrando página _PAGE_ de _PAGES_',
            infoFiltered: " - filtrado de _MAX_ registros",
            paginate: { first: '«', previous: '‹', next: '›', last: '»' },
            processing: 'Processando...',
          },
         searching: false,
         data: this.list,
         lengthChange: false,
         columns: [
          // { title: 'Cód',      data: 'id',                 width : '10px' },
           { title: 'Nome',     data: 'name',               width : '60%' },
           { title: 'Sexo',     data: 'gender.description', width : '15%' },
           { title: 'Situação', data: 'state.description',  width : '15%' },
           { data: 'id', orderable: false, width : '20px',  title: '', render: function (data: 'id', type: 'button', full: any) {
             return "<button class='btn-table btn-primary' action='edit'   data_row='" + data + "' style='margin-right:10px;'><i data_row='" + data + "' action='edit' class='fa fa-pencil' ></i></button>" + 
             "<button class='btn-table btn-danger'  action='delete' data_row='" + data + "' ><i data_row='" + data + "' action='delete' class='fa fa-trash-o'></i></button>"}}
         ],
      //    columnDefs: [
      //     {
      //       "searchable": false,
      //       "orderable": false,
      //       "targets": 0
      //     },
      //     { 
      //       width: '3%', 
      //       targets: 0  //la primer columna tendra una anchura del  20% de la tabla
      //     },
      //     {
      //         targets: -1, //-1 es la ultima columna y 0 la primera
      //         data: 'id',
      //         defaultContent: '<div class="btn-group"> <button type="button" class="btn btn-info btn-xs dt-view" style="margin-right:16px;"><span class="glyphicon glyphicon-eye-open glyphicon-info-sign" aria-hidden="true"></span></button>  <button type="button" class="btn btn-primary btn-xs dt-edit" style="margin-right:16px;"><span class="glyphicon glyphicon-pencil" aria-hidden="true"></span></button><button type="button" class="btn btn-danger btn-xs dt-delete"><span class="glyphicon glyphicon-remove glyphicon-trash" aria-hidden="true"></span></button></div>'
      //     },
      //     { orderable: false, searchable: false, targets: -1 } //Ultima columna no ordenable para botones
      // ],
      };
  }

  ngAfterViewInit(): void {
    this.renderer.listenGlobal('document', 'click', (event) => {
      if (event.target.hasAttribute('data_row')) {
        console.log(event.target.getAttribute('data_row'));
       // this.router.navigate(["/person/" + event.target.getAttribute("view-person-id")]);
      }
    });
  }  

  ngOnInit() {

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

}
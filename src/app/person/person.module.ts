import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PersonListComponent } from './person-list/person-list.component';
import { PersonFormComponent } from './person-form/person-form.component';
import { PersonService} from './person.service'; 

import { DataTablesModule } from 'angular-datatables';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DataTablesModule
  ],
  declarations: [
    PersonListComponent, 
    PersonFormComponent
  ],
  exports: [
    PersonListComponent,
    PersonFormComponent
  ],
  providers : [
    PersonService,
  ]
})
export class PersonModule { }

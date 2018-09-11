import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonListComponent } from './person-list/person-list.component';
import { PersonFormComponent } from './person-form/person-form.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PersonListComponent, PersonFormComponent]
})
export class PersonModule { }

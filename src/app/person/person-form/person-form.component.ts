import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Person } from '../../model/Person';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css']
})
export class PersonFormComponent implements OnInit {

  person: Person;

  constructor() { }

  onSubmit(frm) {
    console.log(frm);
  }

  ngOnInit() {
  }

  verifiy(field) {
      return !field.valid && field.touched;
  }

  showError(field) {
    return {'is-invalid' : this.verifiy(field) };
  }

}

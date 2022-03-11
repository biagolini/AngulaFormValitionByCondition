import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

export interface StatesModel {
  id: number;
  description: string;
}

const ELEMENT_DATA: StatesModel[] = [
  { id: 0, description: 'SP' },
  { id: 1, description: 'RJ' },
  { id: 2, description: 'MG' },
];

@Component({
  selector: 'form-field-overview-example',
  templateUrl: 'form-field-overview-example.html',
  styleUrls: ['form-field-overview-example.css'],
})
export class FormFieldOverviewExample {
  dataSource = ELEMENT_DATA;

  constructor(private form: FormBuilder) {}

  myForm = this.form.group({
    name: [null],
    state: [null],
    phone: [null],
  });
}

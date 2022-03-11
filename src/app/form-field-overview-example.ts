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
    state: [null, Validators.required],
    name: [null],
    email: [null],
    reciveSMS: [false],
    phone: [null],
  });

  ngOnInit(): void {
    // How to subscribe to a form field change
    this.myForm.get('reciveSMS')?.valueChanges.subscribe((value) => {
      if (value == true) {
        alert('You will receive SMSs');
      } else {
        alert('You will NOT receive SMSs');
      }
    });
    this.myForm.get('state')?.valueChanges.subscribe((value) => {
      if (value == 0) {
        this.myForm
          .get('email')
          ?.setValidators([Validators.required, Validators.email]);
      } else {
        this.myForm.get('email')?.clearValidators();
      }
      this.myForm.controls['email'].updateValueAndValidity();
    });
  }

  turnPhoneValidators() {
    // set validators by function behavior
    this.myForm.controls['phone'].setValidators(Validators.required);
    this.myForm.controls['phone'].updateValueAndValidity();
  }

  onSubmmit() {
    alert('Submmited!');
    this.myForm.patchValue({
      state: [null],
      name: [null],
      email: [null],
      reciveSMS: [false],
      phone: [null],
    });
  }
}

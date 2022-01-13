import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
})
export class AddComponent implements OnInit {

  myForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    //price: [''],
    //description: [''],
    //image: [''],
  })

  constructor(
    private fb: FormBuilder,
  ) {
 
  }

  hasError(field: string): boolean {
    return this.myForm.get(field)?.invalid || false;
  }

  ngOnInit(): void {
  }

}

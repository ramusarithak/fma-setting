import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  myForm: any;
  formBuilder:any;
  
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    
  }
submit() {
  console.log("your form submited successfully");
  let emailRegEx = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
  this.myForm=this.fb.group({
    
    firstName:['',Validators.required],
    lastName:['',Validators.required,Validators.pattern(emailRegEx)],
    age:['',Validators.required]
    
  })
}
}
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {Employee,Alumni} from '../shared/signup.model';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import {AlumniService} from '../shared/alumni.service';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-signup-alumni',
  templateUrl: './signup-alumni.component.html',
  styleUrls: ['./signup-alumni.component.css']
})
export class SignupAlumniComponent implements OnInit {
  alumni:Alumni;
  alumniForm: FormGroup;
  isMail: boolean;
  submitted: boolean;
//   BrowserModule,
// AppRoutingModule,
// ReactiveFormsModule,
// HttpClientModule,
// FormsModule,
// CommonModule
  constructor(private service:AlumniService, private formBuilder: FormBuilder) {
    this.alumni=new Alumni();
    this.isMail = true;
    this.submitted = false;
    this.alumniForm = this.formBuilder.group({
      fname: [''],
      lname: [''],
      contact: [''],
      gender: [''],
      dob: [''],
      message: [''],
      city: [''],
      pincode: [''],
      state: [''],
      district: [''],
      password: [''],
      email:['']
    });
   }

   isValidEmail() {
    var email = this.alumni.email;
    if (email != null) {
      if (/^\w+(['\.-]?[\w+]?)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        this.isMail = true;
        return true;
      }
      else {
        this.isMail = false;
        return false;
      }
    }
    else{
      this.isMail = false;
      return false;
    }

  }

  ngOnInit(): void {
    // var alumni = new Alumni()
    // alumni.fname= "ptcd";
    // alumni.lname ="dfdf";
    // alumni.contact ="dd";
    // alumni.gender = "ddds";
    // alumni.dob = "rete";
    // alumni.message= "ptcd";
    // alumni.city ="dfdf";
    // alumni.pincode ="dd";
    // alumni.state = "ddds";
    // alumni.district = "rete";
    // alumni.password = "fgfgf";
   
        // var employee = new Employee();
    // employee._id ="1";
    // employee.name = "binu";
    // employee.position = "ddd";
    // employee.salary = 1234;
    // employee.office = "london";
    // this.service.postEmployee(employee).subscribe((res) => {
    //  console.log(res);
    // });


    // this.service.postAlumni(alumni).subscribe((res) => {
    //   console.log(res);
    //  });
  
    }

    register(){
      this.submitted = true;
      var alumni = new Alumni()
      alumni.fname= "ptcd";
      alumni.lname ="dfdf";
      alumni.contact ="dd";
      alumni.gender = "ddds";
      alumni.dob = "rete";
      alumni.message= "ptcd";
      alumni.city ="dfdf";
      alumni.pincode ="dd";
      alumni.state = "ddds";
      alumni.district = "rete";
      alumni.password = "fgfgf";

     
     if(this.isValidEmail() && !Object.values(this.alumni).some(element => element == null || element == undefined)){
       //alert("dd");
      this.service.postAlumni(this.alumni).subscribe((res) => {
        console.log(this.alumni);
       });
      }

    }

}

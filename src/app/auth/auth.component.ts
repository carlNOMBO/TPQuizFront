import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators, FormGroup, FormBuilder} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../model/user';
import { ServiceService } from '../service.service';

interface Login {
  value: string;
  viewValue: string;
}

interface Password {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  loginFormControl = new FormControl('', [
    Validators.required

  ]);
  passwordFormControl = new FormControl('', [
    Validators.required

  ]);

  authForm : FormGroup;

  constructor(private formBuilder: FormBuilder,
              private service: ServiceService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  onSubmitForm()
  {
    if (this.authForm.valid)
    {
      let user : User = this.service.connexion(this.loginFormControl.value, this.passwordFormControl.value);
      if(user != null){
        this.service.user = user;
        this.router.navigate(['quiz']);
      }else{
        alert("Login ou pwd incorrect");
      }            
    }
  }
}

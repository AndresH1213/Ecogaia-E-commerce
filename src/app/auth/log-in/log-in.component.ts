import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  public formSubmitted = false;
  public oauth2: any;

  public loginForm = this.fb.group({
    email: [localStorage.getItem('email') || '', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    remember: [false]
  })
  
  constructor(private router: Router,
              private fb: FormBuilder,
              private ngZone: NgZone) { }

  ngOnInit(): void {
  }

  login() {
    this.formSubmitted = true;
    console.log(this.loginForm.value)
  }
  googleLogin() {
    //TODO: implement this authentication
  }

}

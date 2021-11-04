import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  formSignup = this.fb.group({
    email: ['test@test.com', [Validators.required, Validators.email]],
    password: ['12345', [Validators.required]],
    password2: ['12345', [Validators.required]],
  })

  constructor(private router: Router,
              private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  createUser() {
    console.log(this.formSignup.value)
  }

}

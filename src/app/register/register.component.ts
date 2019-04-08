import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  title = 'myshop';
  userForm = new FormGroup({
    firstNameFormControl: new FormControl('', [
      Validators.required]),
    lastNameFormControl: new FormControl('', [
      Validators.required]),
    emailFormControl: new FormControl('', [
      Validators.required]),
    genderFormControl: new FormControl('', [
      Validators.required]),
    phoneFormControl: new FormControl('', [
      Validators.required]),
    addressFormControl: new FormControl('', [
      Validators.required]),
    passwordFormControl: new FormControl('', [Validators.required])
  });
  errorMessage = 'Invalid login.';

  constructor(private router: Router) {
  }

  onSubmit() {
    if (sessionStorage.getItem('token')) {
      sessionStorage.removeItem('token');
    }
    this.router.navigate(['register']);

    // this.appDialog.dismissSnackbar();

  }

  cancel() {
    this.router.navigate(['login']);
  }

  ngOnInit(): void {
  }
}

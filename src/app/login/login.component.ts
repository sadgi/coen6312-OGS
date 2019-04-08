import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title = 'myshop';
  userForm = new FormGroup({
    emailFormControl: new FormControl('', [
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

    if(this.userForm.value.emailFormControl !== '' && this.userForm.value.passwordFormControl !== ''){
      this.router.navigate(['home']);
    } else {
      alert("Please fill the required fields.")
    }




    // this.appDialog.dismissSnackbar();

  }

  goToSignup() {
    this.router.navigate(['register']);
  }

  ngOnInit(): void {
  }

}

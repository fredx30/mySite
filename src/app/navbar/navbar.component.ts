import { Component, OnInit } from '@angular/core';
import {ErrorStateMatcher} from '@angular/material';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

  constructor() { }

  username: string;
  password: string;

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  matcher = new MyErrorStateMatcher();

  ngOnInit() {
  }

  /**
   * This method is for processing the login info.
   * Could be connected to radius?
   */
  login(): void {
    if (this.username === 'admin' && this.password === 'admin') {
      // this.router.navigate(['user']);
    } else {
      alert('Invalid credentials');
    }
  }

}

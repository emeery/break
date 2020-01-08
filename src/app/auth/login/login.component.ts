import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { AddtweetComponent } from 'src/app/components/addtweet/addtweet.component';
import { FormGroup, FormBuilder, NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  tweetForm: FormGroup;
  constructor(
    public autService: AuthService ,
    ) { }

  ngOnInit() {
  }
  onLogin(form: NgForm) {
   this.autService.createUser(
     form.value.correo,
     form.value.contraseña );
  }
}

import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AuthService } from '../auth.service';
import { LoginComponent } from '../login/login.component';
import { MatDialogRef } from '@angular/material';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(
    private autService: AuthService,
    private dlgRef: MatDialogRef<LoginComponent>
    ) { }

  ngOnInit() {
  }
  onSignup(form: FormGroup) {
    this.autService.createUser(
      form.value.nombre,
      form.value.correo,
      form.value.contraseña
      );
    this.dlgRef.close();
  }

}

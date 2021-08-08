import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AuthService } from '../auth.service';
import { LoginComponent } from '../login/login.component';
import { MatDialog,MatDialogRef } from '@angular/material';
import { MessageComponent } from 'src/app/shared/message/message.component';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  spinner = false;
  constructor(
    private autService: AuthService,
    private dlgL: MatDialogRef<LoginComponent>,
    private dlg: MatDialog
    ) { }

  ngOnInit() {}
  onSignup(form: FormGroup) {
    this.autService.createUser(
      form.value.nombre,
      form.value.correo,
      form.value.contraseña).
    subscribe(res => {
      this.dlgL.close()
      this.dlg.open(MessageComponent, {data: {msg: res.msg}})
    })

  }

}

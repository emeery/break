import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FormGroup, NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  tweetForm: FormGroup;
  constructor(
<<<<<<< HEAD
    private autService: AuthService,
    private dlgRef: MatDialogRef<LoginComponent>
    ) { }
=======
    public autService: AuthService,
    private dlgRef: MatDialogRef<LoginComponent>
  ) { }
>>>>>>> 8ad7c6938a82c104a5a4aab55fe02537ac939cbb

  ngOnInit() {
  }
  onLogin(form: NgForm) {
<<<<<<< HEAD
   this.autService.loginUser(
     form.value.correo,
     form.value.contraseña
    );
   this.dlgRef.close();
=======
    this.autService.loginUser(
      form.value.correo,
      form.value.contraseña);
    this.dlgRef.close();
>>>>>>> 8ad7c6938a82c104a5a4aab55fe02537ac939cbb
  }

}

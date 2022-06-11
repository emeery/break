import { Component, OnInit } from "@angular/core";
import { MatDialogRef } from "@angular/material";
import { FormBuilder, FormGroup, NgForm, Validators } from "@angular/forms";
import { AuthService } from "../auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  constructor(
    public authService: AuthService,
    private formBuilder: FormBuilder,
    private dlgRef: MatDialogRef<LoginComponent>
  ) {
    this.form = this.formBuilder.group({
      email: ['',[Validators.required, Validators.email]]
    })
  }

  ngOnInit() {}
  
  login() {
    console.log(this.form.value)
    this.authService.login(this.form.value.email)
    this.form.reset()
    this.dlgRef.close()
  }
}

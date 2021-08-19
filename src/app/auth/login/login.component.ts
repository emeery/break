import { Component, OnInit } from "@angular/core";
import { MatDialogRef } from "@angular/material";
import { FormGroup, NgForm } from "@angular/forms";
import { AuthService } from "../auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  tweetForm: FormGroup;
  constructor(
    public autService: AuthService,
    private dlgRef: MatDialogRef<LoginComponent>
  ) {}

  ngOnInit() {}
  onSignin(form: NgForm) {
    if (form.invalid) return;
    this.autService.loginUser(form.value.email, form.value.password);
    this.dlgRef.close();
  }
}

import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { AuthService } from "../auth.service";
import { LoginComponent } from "../login/login.component";
import { MatDialog, MatDialogRef } from "@angular/material";
import { MessageComponent } from "src/app/components/shared/message/message.component";
@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.scss"],
})
export class SignupComponent implements OnInit {
  spinner = false;
  constructor(
    private autService: AuthService,
    private dlgL: MatDialogRef<LoginComponent>,
    private dlg: MatDialog
  ) {}

  ngOnInit() {}
  onSignup(form: FormGroup) {
    if (form.invalid) return;
    this.spinner = true;
    this.autService
      .createUser(form.value.name, form.value.email, form.value.password)
      .subscribe(
        (res) => {
          this.dlgL.close()
          this.dlg.open(MessageComponent, { data: { msg: res.msg } })
        },(error) => (this.spinner = false)
      );
  }
}

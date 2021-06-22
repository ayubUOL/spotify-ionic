import { ApiService } from "./../services/api.service";
// login.page.ts
import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from "@angular/forms";
import { NavController } from "@ionic/angular";
import { AuthenticateService } from "../services/authentication.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit {
  validations_form: FormGroup;
  errorMessage: string = "";

  constructor(
    private navCtrl: NavController,
    private authService: AuthenticateService,
    private formBuilder: FormBuilder,
    private apiService: ApiService
  ) {}

  ngOnInit() {
    this.validations_form = this.formBuilder.group({
      email: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$"),
        ])
      ),
      password: new FormControl(
        "",
        Validators.compose([
          Validators.minLength(8),
          Validators.pattern(
            "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"
          ),
        ])
      ),
    });
  }

  validation_messages = {
    email: [
      { type: "required", message: "Email is required." },
      { type: "pattern", message: "Please enter a valid email." },
    ],
    password: [
      { type: "required", message: "Password is required." },

      {
        type: "pattern",
        message:
          "Password must have minimum 8 characters and should contains upper case, lower case, digit and special characters",
      },
    ],
  };

  loginUser(value) {
    this.authService.loginUser(value).then(
      (res) => {
        console.log(res);
        this.errorMessage = "";
        this.navCtrl.navigateForward("/dashboard");
      },
      (err) => {
        this.errorMessage = err.message;
      }
    );
  }

  goToRegisterPage() {
    this.navCtrl.navigateForward("/register");
  }
}

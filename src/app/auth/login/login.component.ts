import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: any = {};
  showSignup: boolean = false;
  isFlipped: boolean = false;
  constructor(private authServece:AuthService) { }

  ngOnInit() {
  }
 onSubmit(formValue){
      this.authServece.login(formValue.email,formValue.password);
}

onSignupWithGoogle() {
  this.authServece.signupWithGoogle();
}

}

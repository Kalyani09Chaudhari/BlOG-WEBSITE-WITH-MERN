import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import * as firebase from 'firebase/app';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedIn:BehaviorSubject<boolean>=new BehaviorSubject<boolean>(false);
  isLoggedInGuard:boolean=false;
  constructor(private asAuth:AngularFireAuth,private toastr:ToastrService,private router:Router) {
   }
  login(email,password){
    this.asAuth.auth.signInWithEmailAndPassword(email,password).then(logRef=>{
      this.toastr.success("logged Successfully");
      this.loadUser();
      this.loggedIn.next(true);
      this.isLoggedInGuard=true;
      this.router.navigate(['/userDashboard']);
    }).catch(e=>{
      this.toastr.warning(e);
    })

         
  }

  signup(email, password) {
    this.asAuth.auth.createUserWithEmailAndPassword(email, password).then(logRef => {
      logRef.user.sendEmailVerification().then(() => {
        this.toastr.success("Signed up Successfully. Verification email has been sent.");
        this.loadUser();
        this.loggedIn.next(true);
        this.isLoggedInGuard = true;
      }).catch(e => {
        this.toastr.warning(e);
      });
    }).catch(e => {
      this.toastr.warning(e);
    });
  }
  signupWithGoogle() {
    this.asAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then((result) => {
        // Handle successful signup with Google
        // You can access the user's information using `result.user`
        this.toastr.success('Signed up successfully with Google');
        this.loadUser();
        this.loggedIn.next(true);
        this.isLoggedInGuard = true;
        this.router.navigate(['/userDashboard']);
      })
      .catch((error) => {
        // Handle errors during signup with Google
        this.toastr.error('Signup with Google failed');
      });
  }
  
  loadUser(){
    this.asAuth.authState.subscribe(user=>{
      console.log(JSON.parse(JSON.stringify(user)));
      localStorage.setItem('user',JSON.stringify(user));
    });
  }
  logOut(){
    this.asAuth.auth.signOut().then(()=>{
      this.toastr.success("user Logged Out Successfully");
      localStorage.removeItem('user');
      this.loggedIn.next(false);
      this.isLoggedInGuard=false;
      this.router.navigate(['']);
    })
  }
  isLoggedIn(){
    return this.loggedIn.asObservable();
  }
}

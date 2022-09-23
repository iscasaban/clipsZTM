import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  credentials = {
    email: '',
    password: '',
  };

  showAlert = false;
  alertMsg = 'Please wait! We are logging you in! ';
  alertColor = 'blue';
  inSubmission = false;

  constructor(private auth: AngularFireAuth) {}

  ngOnInit(): void {}

  async login() {
    this.showAlert = true;
    this.alertMsg = 'Please wait! We are logging you in! ';
    this.alertColor = 'blue';
    this.inSubmission = true;

    try {
      await this.auth.signInWithEmailAndPassword(
        this.credentials.email,
        this.credentials.password
      );
    } catch (error) {
      this.inSubmission = false;
      this.alertMsg = 'Something bad happened :( Please try again later';
      this.alertColor = 'red';
      return;
    }
    this.alertMsg = ` Awesome! You're in  `;
    this.alertColor = 'green';
  }

  //Error in event handler: TypeError: Assignment to constant variable.

  //async login() {
  //   this.showAlert = true;
  //   this.alertMsg = 'Please wait! We are logging you in! ';
  //   this.alertColor = 'blue';
  //   this.inSubmission = true;

  //   try {
  //     await this.auth.signInWithEmailAndPassword(
  //       this.credentials.email,
  //       this.credentials.password
  //     );
  //   } catch (error) {
  //     this.inSubmission = false;
  //     this.alertColor = 'red';
  //     switch (error) {
  //       case 'auth/invalid-email':
  //         this.alertMsg = 'The email address is not valid. Please try again';
  //         break;
  //       case 'auth/user-disabled':
  //         this.alertMsg = 'This user has been disabled';
  //         break;
  //       case 'auth/user-not-found':
  //         this.alertMsg = 'There is no user corresponding to the given email';
  //         break;
  //       case 'auth/wrong-password':
  //         this.alertMsg = 'Invalid password. Please try again';
  //         break;
  //       default:
  //         this.alertMsg = 'Something bad happened :( Please try again later';
  //         break;
  //     }
  //     return;
  //   }
  //   this.alertMsg = ` Awesome! You're in  `;
  //   this.alertColor = 'green';
  // }
}

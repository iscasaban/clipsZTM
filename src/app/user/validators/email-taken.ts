import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Injectable } from '@angular/core';
import {
  AbstractControl,
  AsyncValidator,
  ValidationErrors,
} from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmailTaken implements AsyncValidator {
  constructor(private auth: AngularFireAuth) {}

  validate = async (
    control: AbstractControl
  ): Promise<ValidationErrors | null> => {
    const response = await this.auth.fetchSignInMethodsForEmail(control.value);
    return response.length ? { EmailTaken: true } : null;
  };
}

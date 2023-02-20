import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HasDataModel } from '../models/has-data.model';
import { LoginCredentialModel } from '../models/login-credential.model';

@Injectable({ providedIn: 'root' })
export class RegisterService {
  constructor(private _httpClient: HttpClient) {
  }

  registerCridentials(credential: HasDataModel<LoginCredentialModel>): Observable<LoginCredentialModel> {
    return this._httpClient.post<LoginCredentialModel>('https://us-central1-courses-auth.cloudfunctions.net/auth/register', credential);
  }
}

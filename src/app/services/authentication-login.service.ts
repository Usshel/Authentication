import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { HasDataModel } from '../models/has-data.model';
import { LoginCredentialsModel } from '../models/login-credentials.model';

@Injectable({ providedIn: 'root' })
export class AuthenticationLoginService {
  constructor(private _httpClient: HttpClient) {
  }

  postCredentials(credentials: HasDataModel<LoginCredentialsModel>): Observable<LoginCredentialsModel> {
    return this._httpClient.post<LoginCredentialsModel>('https://us-central1-courses-auth.cloudfunctions.net/auth/login', credentials);

  }
}

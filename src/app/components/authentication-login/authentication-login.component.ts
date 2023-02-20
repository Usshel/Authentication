import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { AuthenticationLoginService } from '../../services/authentication-login.service';

@Component({
  selector: 'app-authentication-login',
  templateUrl: './authentication-login.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthenticationLoginComponent {
  readonly form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  });

  constructor(private _authenticationLoginService: AuthenticationLoginService, private _router: Router) {
  }

  onLoginFormSubmitted(credentials: FormGroup): void {
    this._authenticationLoginService.postCredentials({
      data: {
        email: credentials.value.email,
        password: credentials.value.password
      }
    }).subscribe({
      complete:() => this._router.navigate(['/success']),
      error:() => this._router.navigate(['/error'])
    });
  }

  
}

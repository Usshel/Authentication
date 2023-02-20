import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { RegisterService } from '../../services/register.service';

@Component({
  selector: 'app-authentication-register',
  templateUrl: './authentication-register.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthenticationRegisterComponent {
  readonly registration: FormGroup = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  constructor(private _registerService: RegisterService, private _router: Router) {
  }

  onRegistrationSubmitted(registration: FormGroup): void {
    this._registerService.registerCridentials({
      data: {
        email: registration.value.email,
        password: registration.value.password
      }
    }).subscribe(
      {
        complete:() => this._router.navigate([''])
      }
    );

  }
}

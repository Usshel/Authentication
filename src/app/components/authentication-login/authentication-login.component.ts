import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-authentication-login',
  templateUrl: './authentication-login.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthenticationLoginComponent {
  readonly form: FormGroup = new FormGroup({ email: new FormControl(), string: new FormControl() });
}

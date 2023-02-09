import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-form-control-email',
  templateUrl: './form-control-email.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormControlEmailComponent {
  readonly form: FormGroup = new FormGroup({ email: new FormControl('', Validators.email) });

  readonly emailForm: Observable<string> = this.form.valueChanges.pipe(map((data) => data['email']))
  onFormSubmitted(form: FormGroup): void {
  }
}

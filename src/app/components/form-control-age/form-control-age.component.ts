import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-form-control-age',
  templateUrl: './form-control-age.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormControlAgeComponent {
  readonly form: FormGroup = new FormGroup({ age: new FormControl('', Validators.min(18)) });

  readonly ageForm: Observable<number> = this.form.valueChanges.pipe(map(form => form['age']))

  onFormSubmitted(form: FormGroup): void {
  }
}

import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-form-control-name',
  templateUrl: './form-control-name.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormControlNameComponent {
  readonly form: FormGroup = new FormGroup({ 
    name: new FormControl('', [Validators.required, Validators.minLength(3)]) 
  });

  readonly nameForm: Observable<string> = this.form.valueChanges.pipe(map((data) => data['name'] ))

  onFormSubmitted(form: FormGroup): void {
  }
}

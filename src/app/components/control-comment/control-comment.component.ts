import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-control-comment',
  templateUrl: './control-comment.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ControlCommentComponent {
  readonly form: FormGroup = new FormGroup({ comment: new FormControl('', Validators.pattern('([A-Za-z0-9\s_-]+ ){4,}')) });

  readonly commentForm: Observable<string> = this.form.valueChanges.pipe(map((value) => value['comment']))

  onFormSubmitted(form: FormGroup): void {
  }
}

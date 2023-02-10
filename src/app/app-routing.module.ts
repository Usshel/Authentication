import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormControlNameComponent } from './components/form-control-name/form-control-name.component';
import { FormControlAgeComponent } from './components/form-control-age/form-control-age.component';
import { FormControlEmailComponent } from './components/form-control-email/form-control-email.component';
import { ControlCommentComponent } from './components/control-comment/control-comment.component';
import { FormControlNameComponentModule } from './components/form-control-name/form-control-name.component-module';
import { FormControlAgeComponentModule } from './components/form-control-age/form-control-age.component-module';
import { FormControlEmailComponentModule } from './components/form-control-email/form-control-email.component-module';
import { ControlCommentComponentModule } from './components/control-comment/control-comment.component-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'control-name', component: FormControlNameComponent }, 
  { path: 'control-age', component: FormControlAgeComponent }, 
  { path: 'control-email', component: FormControlEmailComponent },
   { path: 'control-comment', component: ControlCommentComponent }]), FormControlNameComponentModule, FormControlAgeComponentModule, FormControlEmailComponentModule, ControlCommentComponentModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }

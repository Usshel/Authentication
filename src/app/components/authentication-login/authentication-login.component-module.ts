import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthenticationLoginComponent } from './authentication-login.component';

@NgModule({
  imports: [ReactiveFormsModule],
  declarations: [AuthenticationLoginComponent],
  providers: [],
  exports: [AuthenticationLoginComponent]
})
export class AuthenticationLoginComponentModule {
}

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormControlNameComponent } from './components/form-control-name/form-control-name.component';
import { FormControlAgeComponent } from './components/form-control-age/form-control-age.component';
import { FormControlEmailComponent } from './components/form-control-email/form-control-email.component';
import { ControlCommentComponent } from './components/control-comment/control-comment.component';
import { AuthenticationLoginComponent } from './components/authentication-login/authentication-login.component';
import { AutehnticationLoginSuccessComponent } from './components/autehntication-login-success/autehntication-login-success.component';
import { AuthenticationLoginErrorComponent } from './components/authentication-login-error/authentication-login-error.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AuthenticationRegisterComponent } from './components/authentication-register/authentication-register.component';
import { FormControlNameComponentModule } from './components/form-control-name/form-control-name.component-module';
import { FormControlAgeComponentModule } from './components/form-control-age/form-control-age.component-module';
import { FormControlEmailComponentModule } from './components/form-control-email/form-control-email.component-module';
import { ControlCommentComponentModule } from './components/control-comment/control-comment.component-module';
import { AuthenticationLoginComponentModule } from './components/authentication-login/authentication-login.component-module';
import { AutehnticationLoginSuccessComponentModule } from './components/autehntication-login-success/autehntication-login-success.component-module';
import { AuthenticationLoginErrorComponentModule } from './components/authentication-login-error/authentication-login-error.component-module';
import { HomePageComponentModule } from './components/home-page/home-page.component-module';
import { AuthenticationRegisterComponentModule } from './components/authentication-register/authentication-register.component-module';

@NgModule({
  imports: [RouterModule.forRoot([
    { path: 'control-name', component: FormControlNameComponent },
    { path: 'control-age', component: FormControlAgeComponent },
    { path: 'control-email', component: FormControlEmailComponent },
    { path: 'control-comment', component: ControlCommentComponent },
    { path: 'authentication-login', component: AuthenticationLoginComponent },
    { path: 'success', component: AutehnticationLoginSuccessComponent },
    { path: 'error', component: AuthenticationLoginErrorComponent },
    { path: '', component: HomePageComponent },
    { path: 'register', component: AuthenticationRegisterComponent }
  ]), FormControlNameComponentModule, FormControlAgeComponentModule, FormControlEmailComponentModule, ControlCommentComponentModule, AuthenticationLoginComponentModule, AutehnticationLoginSuccessComponentModule, AuthenticationLoginErrorComponentModule, HomePageComponentModule, AuthenticationRegisterComponentModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }

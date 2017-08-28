import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { NotificationService } from '../core/services/notification.service';
import { AuthenService } from '../core/services/authen.service';
export const routes: Routes = [
  { path: '', component: LoginComponent }
]
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  providers: [NotificationService, AuthenService],
  declarations: [LoginComponent]
})
export class LoginModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoleComponent } from './role.component';
import { Routes, RouterModule } from '@angular/router';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';

export const roleRouter: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  { path: 'index', component: RoleComponent }
]

@NgModule({
  imports: [
    CommonModule,
    PaginationModule,
    FormsModule,
    RouterModule.forChild(roleRouter),
    ModalModule.forRoot()
  ],
  declarations: [RoleComponent]
})
export class RoleModule { }

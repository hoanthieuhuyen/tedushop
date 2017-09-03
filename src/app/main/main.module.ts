import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { mainRoutes } from './main.routers';
import { RouterModule } from '@angular/router';
import { UtilityService } from '../core/services/utility.service';
import { AuthenService } from '../core/services/authen.service';
import { DataService } from '../core/services/data.service';
import { NotificationService } from '../core/services/notification.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(mainRoutes)
  ],
  declarations: [MainComponent],
  providers: [UtilityService, AuthenService, DataService, NotificationService]
})
export class MainModule { }

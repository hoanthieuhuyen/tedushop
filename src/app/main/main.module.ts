import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { mainRoutes } from './main.routers';
import { RouterModule } from '@angular/router';
import {HomeModule} from './home/home.module';
@NgModule({
  imports: [
    CommonModule,
    HomeModule,
    RouterModule.forChild(mainRoutes)
  ],
  declarations: [MainComponent]
})
export class MainModule { }

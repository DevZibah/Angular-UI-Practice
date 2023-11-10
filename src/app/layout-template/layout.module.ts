import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { ContactComponent } from './contact.component';
import { LayoutComponent } from './layout.component';
import { RouterModule } from '@angular/router';
import { LayoutRoutingModule } from './layout-routing.module';
// import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [LayoutComponent, HomeComponent, ContactComponent],
  imports: [CommonModule, RouterModule, LayoutRoutingModule],
  exports: [LayoutComponent], //this removes the error that AppComponent cannot recognize LayoutComponent since it was not declared in app.module.ts file
})
export class LayoutModule {}

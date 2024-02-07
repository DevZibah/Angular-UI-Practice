import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { ContactComponent } from './contact.component';
import { LayoutComponent } from './layout.component';
import { RouterModule } from '@angular/router';
import { LayoutRoutingModule } from './layout-routing.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [LayoutComponent, HomeComponent, ContactComponent],
  imports: [CommonModule, RouterModule, LayoutRoutingModule, SharedModule],
})
export class LayoutModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { ContactComponent } from './contact.component';
import { LayoutComponent } from './layout.component';
import { RouterModule } from '@angular/router';
import { LayoutRoutingModule } from './layout-routing.module';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
// import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [LayoutComponent, HomeComponent, ContactComponent, NavbarComponent, SidebarComponent],
  imports: [CommonModule, RouterModule, LayoutRoutingModule],
})
export class LayoutModule {}

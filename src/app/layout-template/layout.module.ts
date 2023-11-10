import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { ContactComponent } from './contact.component';
import { LayoutComponent } from './layout.component';
import { RouterModule } from '@angular/router';
// import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [HomeComponent, ContactComponent, LayoutComponent],
  imports: [CommonModule, RouterModule],
})
export class LayoutModule {}

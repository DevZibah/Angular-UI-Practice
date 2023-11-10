import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {
  HttpClientInMemoryWebApiModule,
} from 'angular-in-memory-web-api';
import { fakeData } from './parent-child-component/fakeData';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BuyerContactingSellerComponent } from './buyer-Contacting-Seller/buyer-contacting-seller.component';
import { ChatAppComponent } from './chatApp/chat-app.component';
import { ParentComponentComponent } from './parent-child-component/parent-component.component';
import { ChildComponentComponent } from './parent-child-component/child-component.component';

import { LayoutModule } from './layout-template/layout.module';

@NgModule({
  declarations: [
    AppComponent,
    BuyerContactingSellerComponent,
    ChatAppComponent,
    ParentComponentComponent,
    ChildComponentComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    HttpClientInMemoryWebApiModule.forRoot(fakeData),
    LayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BuyerContactingSellerComponent } from './buyer-Contacting-Seller/buyer-contacting-seller.component';
import { ChatAppComponent } from './chatApp/chat-app.component';
import { ParentComponentComponent } from './parent-child-component/parent-component.component';

@NgModule({
  declarations: [
    AppComponent,
    BuyerContactingSellerComponent,
    ChatAppComponent,
    ParentComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

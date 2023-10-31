import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BuyerContactingSellerComponent } from './buyer-Contacting-Seller/buyer-contacting-seller.component';
import { ChatAppComponent } from './chatApp/chat-app.component';

@NgModule({
  declarations: [
    AppComponent,
    BuyerContactingSellerComponent,
    ChatAppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

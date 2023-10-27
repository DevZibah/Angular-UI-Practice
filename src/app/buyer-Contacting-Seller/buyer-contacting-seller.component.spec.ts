import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyerContactingSellerComponent } from './buyer-contacting-seller.component';

describe('BuyerContactingSellerComponent', () => {
  let component: BuyerContactingSellerComponent;
  let fixture: ComponentFixture<BuyerContactingSellerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuyerContactingSellerComponent]
    });
    fixture = TestBed.createComponent(BuyerContactingSellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

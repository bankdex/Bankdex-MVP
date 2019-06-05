import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NeoWalletComponent } from './neo-wallet.component';

describe('NeoWalletComponent', () => {
  let component: NeoWalletComponent;
  let fixture: ComponentFixture<NeoWalletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NeoWalletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NeoWalletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

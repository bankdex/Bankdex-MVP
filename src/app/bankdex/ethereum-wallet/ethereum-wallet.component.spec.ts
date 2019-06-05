import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EthereumWalletComponent } from './ethereum-wallet.component';

describe('EthereumWalletComponent', () => {
  let component: EthereumWalletComponent;
  let fixture: ComponentFixture<EthereumWalletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EthereumWalletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EthereumWalletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

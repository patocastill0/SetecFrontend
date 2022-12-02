import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroCdcComponent } from './registro-cdc.component';

describe('RegistroCdcComponent', () => {
  let component: RegistroCdcComponent;
  let fixture: ComponentFixture<RegistroCdcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroCdcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroCdcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

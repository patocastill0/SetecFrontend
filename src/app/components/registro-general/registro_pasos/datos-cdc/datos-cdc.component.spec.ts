import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosCdcComponent } from './datos-cdc.component';

describe('DatosCdcComponent', () => {
  let component: DatosCdcComponent;
  let fixture: ComponentFixture<DatosCdcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatosCdcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosCdcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

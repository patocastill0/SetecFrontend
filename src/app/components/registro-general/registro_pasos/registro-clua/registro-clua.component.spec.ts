import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroCluaComponent } from './registro-clua.component';

describe('RegistroCluaComponent', () => {
  let component: RegistroCluaComponent;
  let fixture: ComponentFixture<RegistroCluaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroCluaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroCluaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

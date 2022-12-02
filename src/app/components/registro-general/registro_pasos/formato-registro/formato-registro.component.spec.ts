import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormatoRegistroComponent } from './formato-registro.component';

describe('FormatoRegistroComponent', () => {
  let component: FormatoRegistroComponent;
  let fixture: ComponentFixture<FormatoRegistroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormatoRegistroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormatoRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

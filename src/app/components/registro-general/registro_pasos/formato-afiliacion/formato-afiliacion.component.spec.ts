import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormatoAfiliacionComponent } from './formato-afiliacion.component';

describe('FormatoAfiliacionComponent', () => {
  let component: FormatoAfiliacionComponent;
  let fixture: ComponentFixture<FormatoAfiliacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormatoAfiliacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormatoAfiliacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginadortrabajadoresComponent } from './paginadortrabajadores.component';

describe('PaginadortrabajadoresComponent', () => {
  let component: PaginadortrabajadoresComponent;
  let fixture: ComponentFixture<PaginadortrabajadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginadortrabajadoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginadortrabajadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

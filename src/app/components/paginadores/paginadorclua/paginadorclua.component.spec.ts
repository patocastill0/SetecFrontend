import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginadorcluaComponent } from './paginadorclua.component';

describe('PaginadorcluaComponent', () => {
  let component: PaginadorcluaComponent;
  let fixture: ComponentFixture<PaginadorcluaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginadorcluaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginadorcluaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

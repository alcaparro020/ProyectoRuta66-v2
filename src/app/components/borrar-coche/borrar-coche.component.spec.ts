import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrarCocheComponent } from './borrar-coche.component';

describe('BorrarCocheComponent', () => {
  let component: BorrarCocheComponent;
  let fixture: ComponentFixture<BorrarCocheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorrarCocheComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BorrarCocheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

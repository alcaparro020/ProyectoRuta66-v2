import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelarEventoComponent } from './cancelar-evento.component';

describe('CancelarEventoComponent', () => {
  let component: CancelarEventoComponent;
  let fixture: ComponentFixture<CancelarEventoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CancelarEventoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CancelarEventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

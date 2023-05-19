import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrarParticipanteAdminComponent } from './borrar-participante-admin.component';

describe('BorrarParticipanteAdminComponent', () => {
  let component: BorrarParticipanteAdminComponent;
  let fixture: ComponentFixture<BorrarParticipanteAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorrarParticipanteAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BorrarParticipanteAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

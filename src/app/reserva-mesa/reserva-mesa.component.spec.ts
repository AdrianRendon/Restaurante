import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservaMesaComponent } from './reserva-mesa.component';

describe('ReservaMesaComponent', () => {
  let component: ReservaMesaComponent;
  let fixture: ComponentFixture<ReservaMesaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservaMesaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservaMesaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

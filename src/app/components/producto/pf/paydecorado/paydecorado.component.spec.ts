import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaydecoradoComponent } from './paydecorado.component';

describe('PaydecoradoComponent', () => {
  let component: PaydecoradoComponent;
  let fixture: ComponentFixture<PaydecoradoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaydecoradoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaydecoradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

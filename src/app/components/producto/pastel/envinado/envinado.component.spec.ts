import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvinadoComponent } from './envinado.component';

describe('EnvinadoComponent', () => {
  let component: EnvinadoComponent;
  let fixture: ComponentFixture<EnvinadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnvinadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvinadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

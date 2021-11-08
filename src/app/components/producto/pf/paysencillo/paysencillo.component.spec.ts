import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaysencilloComponent } from './paysencillo.component';

describe('PaysencilloComponent', () => {
  let component: PaysencilloComponent;
  let fixture: ComponentFixture<PaysencilloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaysencilloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaysencilloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

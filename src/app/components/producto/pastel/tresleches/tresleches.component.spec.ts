import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreslechesComponent } from './tresleches.component';

describe('TreslechesComponent', () => {
  let component: TreslechesComponent;
  let fixture: ComponentFixture<TreslechesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TreslechesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TreslechesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

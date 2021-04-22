import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DICalculusComponent } from './dicalculus.component';

describe('DICalculusComponent', () => {
  let component: DICalculusComponent;
  let fixture: ComponentFixture<DICalculusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DICalculusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DICalculusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

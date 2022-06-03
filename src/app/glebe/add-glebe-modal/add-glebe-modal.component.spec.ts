import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGlebeModalComponent } from './add-glebe-modal.component';

describe('AddGlebeModalComponent', () => {
  let component: AddGlebeModalComponent;
  let fixture: ComponentFixture<AddGlebeModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddGlebeModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGlebeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFarmModalComponent } from './add-farm-modal.component';

describe('AddFarmModalComponent', () => {
  let component: AddFarmModalComponent;
  let fixture: ComponentFixture<AddFarmModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFarmModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFarmModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

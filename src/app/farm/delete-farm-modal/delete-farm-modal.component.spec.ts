import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteFarmModalComponent } from './delete-farm-modal.component';

describe('DeleteFarmModalComponent', () => {
  let component: DeleteFarmModalComponent;
  let fixture: ComponentFixture<DeleteFarmModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteFarmModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteFarmModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

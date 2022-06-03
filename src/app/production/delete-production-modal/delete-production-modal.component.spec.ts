import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteProductionModalComponent } from './delete-production-modal.component';

describe('DeleteProductionModalComponent', () => {
  let component: DeleteProductionModalComponent;
  let fixture: ComponentFixture<DeleteProductionModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteProductionModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteProductionModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

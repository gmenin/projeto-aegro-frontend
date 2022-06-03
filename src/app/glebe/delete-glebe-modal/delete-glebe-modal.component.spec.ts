import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteGlebeModalComponent } from './delete-glebe-modal.component';

describe('DeleteGlebeModalComponent', () => {
  let component: DeleteGlebeModalComponent;
  let fixture: ComponentFixture<DeleteGlebeModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteGlebeModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteGlebeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlebeListComponent } from './glebe-list.component';

describe('GlebeListComponent', () => {
  let component: GlebeListComponent;
  let fixture: ComponentFixture<GlebeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlebeListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlebeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

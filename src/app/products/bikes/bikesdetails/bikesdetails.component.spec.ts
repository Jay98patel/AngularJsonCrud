import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BikesdetailsComponent } from './bikesdetails.component';

describe('BikesdetailsComponent', () => {
  let component: BikesdetailsComponent;
  let fixture: ComponentFixture<BikesdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BikesdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BikesdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

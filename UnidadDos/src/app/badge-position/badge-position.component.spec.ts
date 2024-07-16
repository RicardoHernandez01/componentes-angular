import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadgePositionComponent } from './badge-position.component';

describe('BadgePositionComponent', () => {
  let component: BadgePositionComponent;
  let fixture: ComponentFixture<BadgePositionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BadgePositionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BadgePositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

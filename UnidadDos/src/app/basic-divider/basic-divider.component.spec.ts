import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicDividerComponent } from './basic-divider.component';

describe('BasicDividerComponent', () => {
  let component: BasicDividerComponent;
  let fixture: ComponentFixture<BasicDividerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicDividerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BasicDividerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

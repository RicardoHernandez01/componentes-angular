import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicChipComponent } from './basic-chip.component';

describe('BasicChipComponent', () => {
  let component: BasicChipComponent;
  let fixture: ComponentFixture<BasicChipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicChipComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BasicChipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

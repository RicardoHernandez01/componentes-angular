import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicChecboxesComponent } from './basic-checboxes.component';

describe('BasicChecboxesComponent', () => {
  let component: BasicChecboxesComponent;
  let fixture: ComponentFixture<BasicChecboxesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicChecboxesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BasicChecboxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

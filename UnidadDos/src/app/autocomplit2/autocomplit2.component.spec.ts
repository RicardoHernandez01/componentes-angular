import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Autocomplit2Component } from './autocomplit2.component';

describe('Autocomplit2Component', () => {
  let component: Autocomplit2Component;
  let fixture: ComponentFixture<Autocomplit2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Autocomplit2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Autocomplit2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

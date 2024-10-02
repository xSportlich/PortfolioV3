import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetusworkComponent } from './letuswork.component';

describe('LetusworkComponent', () => {
  let component: LetusworkComponent;
  let fixture: ComponentFixture<LetusworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LetusworkComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LetusworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

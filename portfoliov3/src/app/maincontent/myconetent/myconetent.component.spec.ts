import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyconetentComponent } from './myconetent.component';

describe('MyconetentComponent', () => {
  let component: MyconetentComponent;
  let fixture: ComponentFixture<MyconetentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyconetentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyconetentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

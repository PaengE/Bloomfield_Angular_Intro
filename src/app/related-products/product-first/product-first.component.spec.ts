import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductFirstComponent } from './product-first.component';

describe('ProductFirstComponent', () => {
  let component: ProductFirstComponent;
  let fixture: ComponentFixture<ProductFirstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductFirstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

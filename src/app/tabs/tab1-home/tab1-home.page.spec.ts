import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Tab1HomePage } from './tab1-home.page';

describe('Tab1HomePage', () => {
  let component: Tab1HomePage;
  let fixture: ComponentFixture<Tab1HomePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Tab1HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

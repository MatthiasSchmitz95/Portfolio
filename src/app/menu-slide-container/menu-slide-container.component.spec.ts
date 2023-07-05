import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuSlideContainerComponent } from './menu-slide-container.component';

describe('MenuSlideContainerComponent', () => {
  let component: MenuSlideContainerComponent;
  let fixture: ComponentFixture<MenuSlideContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuSlideContainerComponent]
    });
    fixture = TestBed.createComponent(MenuSlideContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

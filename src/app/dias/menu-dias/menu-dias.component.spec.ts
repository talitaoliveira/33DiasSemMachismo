import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuDiasComponent } from './menu-dias.component';

describe('MenuDiasComponent', () => {
  let component: MenuDiasComponent;
  let fixture: ComponentFixture<MenuDiasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuDiasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuDiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

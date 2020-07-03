import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetinforComponent } from './petinfor.component';

describe('PetinforComponent', () => {
  let component: PetinforComponent;
  let fixture: ComponentFixture<PetinforComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetinforComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetinforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

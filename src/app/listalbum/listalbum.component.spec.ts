import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListalbumComponent } from './listalbum.component';

describe('ListalbumComponent', () => {
  let component: ListalbumComponent;
  let fixture: ComponentFixture<ListalbumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListalbumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListalbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

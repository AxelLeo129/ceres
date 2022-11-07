import { AgmCoreModule } from '@agm/core';
import { TestBed, ComponentFixture, waitForAsync } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';

import { ListPage } from './list.page';

describe('ListPage', () => {
  let component: ListPage;
  let fixture: ComponentFixture<ListPage>;
  let route: ActivatedRoute;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [ListPage],
      imports: [
        IonicModule.forRoot(),
        RouterTestingModule.withRoutes([])
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: { params: { id: '1' } },
          },
        },
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(ListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should search ', () => {
    component.search_value = 'Saberico';
    component.search();
    expect(component.restaurants).toBeDefined();
  });

  it('should sort ', () => {
    component.sort();
    expect(component.restaurants).toBeDefined();
  });

});

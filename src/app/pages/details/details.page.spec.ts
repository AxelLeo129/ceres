import { AgmCoreModule } from '@agm/core';
import { TestBed, ComponentFixture, waitForAsync } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';

import { DetailsPage } from './details.page';

describe('DetailsPage', () => {
  let component: DetailsPage;
  let fixture: ComponentFixture<DetailsPage>;
  let route: ActivatedRoute;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [DetailsPage],
      imports: [
        IonicModule.forRoot(),
        RouterTestingModule.withRoutes([]),
        AgmCoreModule.forRoot({
          apiKey: 'AIzaSyBelr5fDWyhUbRd3o6AZBKSpyi-apu5h2Q',
        }),
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
    fixture = TestBed.createComponent(DetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should load list', () => {
      component.ngOnInit();
      expect(component.restaurant).toBeDefined();
  });

  it('should add to favorites', () => {
    component.addToFavorites();
    expect(localStorage.getItem('fav')).toBeDefined();
  })

  it('should add to favorites', () => {
    localStorage.setItem('fav', JSON.stringify(null));
    component.addToFavorites();
    expect(localStorage.getItem('fav')).toBeDefined();
  })
});

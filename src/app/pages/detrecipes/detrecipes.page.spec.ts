import { AgmCoreModule } from '@agm/core';
import { TestBed, ComponentFixture, waitForAsync } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';

import { DetailsPage } from './detrecipes.page';

describe('DetailsPage', () => {
  let component: DetailsPage;
  let fixture: ComponentFixture<DetailsPage>;
  let route: ActivatedRoute;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [DetailsPage],
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
    fixture = TestBed.createComponent(DetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should get the product', () => {
    component.getProduct();
    expect(component.restaurant).toBeDefined();
  });

});

import { AgmCoreModule } from '@agm/core';
import { TestBed, ComponentFixture, waitForAsync } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';

import { PostPage } from './post.page';

describe('PostPage', () => {
  let component: PostPage;
  let fixture: ComponentFixture<PostPage>;
  let route: ActivatedRoute;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [PostPage],
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
    fixture = TestBed.createComponent(PostPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should post a comment', () => {
    component.comentario = 'HOLA'
    component.comment();
    expect(component.comentarios.length).toEqual(4);
  });

  it('should get product', () => {
    component.getProduct();
    expect(component.restaurant).toBeDefined();
  });

});

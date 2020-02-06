import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KarirPage } from './karir.page';

describe('KarirPage', () => {
  let component: KarirPage;
  let fixture: ComponentFixture<KarirPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KarirPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KarirPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

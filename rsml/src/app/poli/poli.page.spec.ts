import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PoliPage } from './poli.page';

describe('PoliPage', () => {
  let component: PoliPage;
  let fixture: ComponentFixture<PoliPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoliPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PoliPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

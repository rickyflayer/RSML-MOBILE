import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { JadwalPage } from './jadwal.page';

describe('JadwalPage', () => {
  let component: JadwalPage;
  let fixture: ComponentFixture<JadwalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JadwalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(JadwalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MalagaImageComponent } from './malaga-image.component';

describe('MalagaImageComponent', () => {
  let component: MalagaImageComponent;
  let fixture: ComponentFixture<MalagaImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MalagaImageComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MalagaImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

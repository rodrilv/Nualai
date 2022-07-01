import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConsultaMedicaResultsModalPage } from './consulta-medica-results-modal.page';

describe('ConsultaMedicaResultsModalPage', () => {
  let component: ConsultaMedicaResultsModalPage;
  let fixture: ComponentFixture<ConsultaMedicaResultsModalPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultaMedicaResultsModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConsultaMedicaResultsModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

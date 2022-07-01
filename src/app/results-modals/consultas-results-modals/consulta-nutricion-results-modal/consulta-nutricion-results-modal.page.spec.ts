import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConsultaNutricionResultsModalPage } from './consulta-nutricion-results-modal.page';

describe('ConsultaNutricionResultsModalPage', () => {
  let component: ConsultaNutricionResultsModalPage;
  let fixture: ComponentFixture<ConsultaNutricionResultsModalPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultaNutricionResultsModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConsultaNutricionResultsModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

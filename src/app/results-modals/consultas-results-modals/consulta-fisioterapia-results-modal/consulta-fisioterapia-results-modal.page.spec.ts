import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConsultaFisioterapiaResultsModalPage } from './consulta-fisioterapia-results-modal.page';

describe('ConsultaFisioterapiaResultsModalPage', () => {
  let component: ConsultaFisioterapiaResultsModalPage;
  let fixture: ComponentFixture<ConsultaFisioterapiaResultsModalPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultaFisioterapiaResultsModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConsultaFisioterapiaResultsModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

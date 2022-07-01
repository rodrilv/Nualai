import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConsultaPsicologicaResultsModalPage } from './consulta-psicologica-results-modal.page';

describe('ConsultaPsicologicaResultsModalPage', () => {
  let component: ConsultaPsicologicaResultsModalPage;
  let fixture: ComponentFixture<ConsultaPsicologicaResultsModalPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultaPsicologicaResultsModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConsultaPsicologicaResultsModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

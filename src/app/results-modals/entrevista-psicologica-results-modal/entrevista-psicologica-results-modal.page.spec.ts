import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EntrevistaPsicologicaResultsModalPage } from './entrevista-psicologica-results-modal.page';

describe('EntrevistaPsicologicaResultsModalPage', () => {
  let component: EntrevistaPsicologicaResultsModalPage;
  let fixture: ComponentFixture<EntrevistaPsicologicaResultsModalPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EntrevistaPsicologicaResultsModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EntrevistaPsicologicaResultsModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

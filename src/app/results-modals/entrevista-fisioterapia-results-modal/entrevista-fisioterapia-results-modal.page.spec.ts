import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EntrevistaFisioterapiaResultsModalPage } from './entrevista-fisioterapia-results-modal.page';

describe('EntrevistaFisioterapiaResultsModalPage', () => {
  let component: EntrevistaFisioterapiaResultsModalPage;
  let fixture: ComponentFixture<EntrevistaFisioterapiaResultsModalPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EntrevistaFisioterapiaResultsModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EntrevistaFisioterapiaResultsModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

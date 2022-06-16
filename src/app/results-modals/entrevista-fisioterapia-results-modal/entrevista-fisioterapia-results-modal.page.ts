import { Component, OnInit } from '@angular/core';
import { SeguimientoService } from 'src/app/services/seguimiento.service';

@Component({
  selector: 'app-entrevista-fisioterapia-results-modal',
  templateUrl: './entrevista-fisioterapia-results-modal.page.html',
  styleUrls: ['./entrevista-fisioterapia-results-modal.page.scss'],
})
export class EntrevistaFisioterapiaResultsModalPage implements OnInit {

  constructor(public seguimientoService: SeguimientoService) { }

  ngOnInit() {
  }

}

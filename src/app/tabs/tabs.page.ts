import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { SeguimientoService } from '../services/seguimiento.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
})
export class TabsPage implements OnInit {
  public member: any;

  constructor(
    private router: Router,
    public seguimientoService: SeguimientoService
  ) {}

  ngOnInit(): void {
    if (
      this.seguimientoService.miembro === undefined ||
      this.seguimientoService.miembro === null
    ) {
      this.toHomePage();
    }
  }

  toHomePage() {
    this.router.navigate(['/'], { replaceUrl: true });
  }
}

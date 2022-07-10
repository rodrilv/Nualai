import { Component, OnInit } from '@angular/core';
import { SeguimientoService } from 'src/app/services/seguimiento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

  constructor(private seguimientoService: SeguimientoService, private router: Router) { }

  ngOnInit() {
    if(this.seguimientoService.miembro == undefined || this.seguimientoService.miembro == null){
      this.router.navigate(['/'], {replaceUrl: true});
    }
  }

}

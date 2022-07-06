import { Component, OnInit } from '@angular/core';
import { SeguimientoService } from 'src/app/services/seguimiento.service';
import { ConsultasService } from 'src/app/services/consultas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {
  constructor(
    private seguimientoService: SeguimientoService,
    private router: Router,
    public consultasService: ConsultasService
  ) {}

  async ngOnInit() {
    if (
      this.seguimientoService.miembro == null ||
      this.seguimientoService.miembro == undefined
    ) {
      this.router.navigate(['/'], { replaceUrl: true });
    } /*else {
      this.consultasService.consultasMember = [];
      let obj: any = await this.consultasService.getConsultasMember(
        this.seguimientoService._id
      );
      this.consultasService.consultasMember.push(obj.consultas);
      console.log(this.consultasService.consultasMember);
    }*/
  }
}

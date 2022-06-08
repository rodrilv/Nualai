import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SeguimientoService } from 'src/app/services/seguimiento.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-following',
  templateUrl: './following.page.html',
  styleUrls: ['./following.page.scss'],
})
export class FollowingPage implements OnInit {
  constructor(
    private router: Router,
    public seguimientoService: SeguimientoService
  ) {}

  async ngOnInit() {
    if(this.seguimientoService.miembro === undefined || this.seguimientoService.miembro === null){
      this.router.navigate(['/']);
    }
  }

  async getMember() {
    Swal.fire({
      title: 'Cargando...',
      toast: true,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
      },
      showConfirmButton: false,
    });
    let obj: any = await this.seguimientoService.getMemberFollowing(
      this.seguimientoService._id
    );
    if (obj.ok) {
      this.seguimientoService.miembro = {};
      this.seguimientoService._id = obj?.member._id;
      this.seguimientoService.miembro = obj?.member;
      this.closeSwal(true);
    } else {
      this.closeSwal(true);
      Swal.fire({ toast: true, icon: 'error', title: 'Hubo un error!' });
    }
  }

  closeSwal(stat: boolean) {
    if (stat == true) {
      Swal.close();
    } else {
      Swal.close();
    }
  }
}

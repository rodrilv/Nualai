import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MiembrosService } from 'src/app/services/miembros.service';
import { PagosService } from 'src/app/services/pagos.service';

@Component({
  selector: 'app-debts',
  templateUrl: './debts.page.html',
  styleUrls: ['./debts.page.scss'],
})
export class DebtsPage implements OnInit {
  formFlag: boolean = false;
  buttonFlag: boolean = false;
  members: any;
  text: any;
  private semanalidad = 365;
  total: number = 0;
  semanas = []

  constructor(
    private modal: ModalController, 
    public miembroService: MiembrosService,
    public pagoService: PagosService) { }

  async ngOnInit() {
    await this.miembroService.getMiembros();
    this.members = this.miembroService.miembros[0].members;
  }

  calcularSemanalidades(event: any){
    //console.log(event);
    if(event.detail.checked === true){
      this.total += this.semanalidad
      this.semanas.push(event.detail.value)
    }else if(event.detail.checked === false){
      this.total -= this.semanalidad
      for(let i=0; i < this.semanas.length; i++){
        if(this.semanas[i] === event.detail.value){
          this.semanas.splice(i,1);
        }
      }
    }
    console.log(this.total)
    console.log(this.semanas);
    
  }
  async pagarSemanalidades(){
    this.formFlag = true;
    this.buttonFlag = true;
    let pago = {
      semanas: this.semanas,
      total: this.total
    }
    await this.pagoService.pagarSemanalidades(pago);
    
  }
  buscarMiembro(event: any){
    console.log(event.detail.value);
    this.text = event.detail.value;
  }
  closeModal() {
    this.modal.dismiss().then(() => {
      this.modal = null;
    });
  }

}

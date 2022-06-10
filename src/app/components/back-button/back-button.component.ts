import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-back-button',
  templateUrl: './back-button.component.html',
  styleUrls: ['./back-button.component.scss'],
})
export class BackButtonComponent implements OnInit {
  @Input() route = ""
  constructor(private router: Router) { }

  ngOnInit() {}

  toHomePage(){
    if(this.route){
      this.router.navigate([this.route]);
    }else{
      return;
    }
    
  }

}

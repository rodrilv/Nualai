import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-following',
  templateUrl: './following.page.html',
  styleUrls: ['./following.page.scss'],
})
export class FollowingPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  returnToHomepage(){
    this.router.navigate(['/']);
  }

}

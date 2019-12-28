import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  watermelon: string;
  cart: string;
  in: string;
  constructor() {
  }

  ngOnInit() {
    this.watermelon = '../../../assets/images/png/watermelon.png';
    this.cart = '../../../assets/images/png/cart.png';
    this.in = '../../../assets/images/png/enter.png';
  }

}

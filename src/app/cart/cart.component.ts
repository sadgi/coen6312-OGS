import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  list: any[] = [];
  constructor(private route: Router) { }
  total = 0;
  ngOnInit() {

  this.list = JSON.parse(localStorage.getItem('items'));
  this.containsAt(this.list);

  }

  containsAt(list) {
    let i;
    for (i = 0; i < list.length; i++) {
      const amount = (list[i].quantity * list[i].price);
      this.total = this.total + amount;
    }

  }

  placeOrder(){
    this.route.navigate(['orderplaced']);
  }



}

import { Component, OnInit } from '@angular/core';
import {Route, Router} from '@angular/router';

@Component({
  selector: 'app-orderplaced',
  templateUrl: './orderplaced.component.html',
  styleUrls: ['./orderplaced.component.css']
})
export class OrderplacedComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  continueShopping(){
    localStorage.removeItem('items');
    this.route.navigate(['product']);

  }
}

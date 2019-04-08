import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-meatandpoultry',
  templateUrl: './meatandpoultry.component.html',
  styleUrls: ['./meatandpoultry.component.css']
})
export class MeatandpoultryComponent implements OnInit {

  constructor(private route: Router) { }
  list: any[] = [];
  ngOnInit() {
  }

  add(evt: any){
    let quant = 1;
    let Row = document.getElementById(evt.id);
    let cells = Row.getElementsByTagName("td");
    if (this.containsObject({name: cells[0].innerText, price: cells[2].innerText, quantity: quant}, this.list)) {
      let index = this.containsAt({name: cells[0].innerText, price: cells[2].innerText, quantity: quant}, this.list);
      this.list[index].quantity = this.list[index].quantity + 1;

    } else {
      console.log('here')
      this.list.push({name: cells[0].innerText, price: cells[2].innerText, quantity: quant});
    }


  }
  containsObject(obj, list) {
    let i;
    for (i = 0; i < list.length; i++) {
      if (list[i].name === obj.name) {
        return true;
      }
    }

    return false;
  }

  containsAt(obj, list) {
    let i;
    for (i = 0; i < list.length; i++) {
      if (list[i].name === obj.name) {
        return i;
      }
    }
  }
  gotocart(){

    localStorage.setItem('items', JSON.stringify(this.list));
    this.route.navigate(['cart']);
  }
}

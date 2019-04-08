import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-subcategory',
  templateUrl: './subcategory.component.html',
  styleUrls: ['./subcategory.component.css']
})
export class SubcategoryComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  bakeryitems() {
    this.route.navigate(['bakery']);
  }
  meatitems() {
    this.route.navigate(['meatpoultry']);
  }
  dairyitems() {
    this.route.navigate(['dairy']);
  }


}

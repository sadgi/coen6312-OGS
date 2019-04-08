import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }
  product() {
    this.route.navigate(['product']);

  }

  gosubcategory(){
    this.route.navigate(['subcategory']);
  }
}

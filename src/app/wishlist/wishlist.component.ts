import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  counter: any;
  @Input() cources: any;
  constructor() { }

  ngOnInit(): void {
    let jsonString = localStorage.getItem("cources");
    if(jsonString){
      this.counter = JSON.parse(jsonString) || '{}';
    }
  }
  addToCart(value: any){
    console.log(value);
    value.addedToCart = !value.addedToCart;
    localStorage.setItem("cources",JSON.stringify(this.counter));
  }


}

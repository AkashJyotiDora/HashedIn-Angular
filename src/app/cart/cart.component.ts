import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  counter: any;
  constructor() { }
  total = 0;
  ngOnInit(): void {
    let jsonString = localStorage.getItem("cources");
    if(jsonString){
      this.counter = JSON.parse(jsonString) || '{}';
    }
    for(let i = 0; i < this.counter.length; i++){
      this.total = this.counter[i].actualPrice;
      // this.total = this.total + this.counter[i].actualPrice;
    }
  }
  booleanCompare(a: boolean, b: boolean) {
    return Number(a) - Number(b);
  }

  removeFromCart(value: any){
    value.addedToCart = !value.addedToCart;
    localStorage.setItem("cources",JSON.stringify(this.counter));
    let jsonString = localStorage.getItem("cources");
    if(jsonString){
      this.counter = JSON.parse(jsonString) || '{}';
    }
  }

}

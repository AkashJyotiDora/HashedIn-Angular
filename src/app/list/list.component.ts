import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Output() courseChange = new EventEmitter();
  @Input("allCource") cources: any;
  counter: any;
  addToCart(value: any){
    console.log(value);
    value.addedToCart = !value.addedToCart;
    localStorage.setItem("cources",JSON.stringify(this.counter));
  }

  addToWishlist(value: any){

  }
  onChanged(value: any) {
    value.addedToWishlist = !value.addedToWishlist;
    localStorage.setItem("cources",JSON.stringify(this.counter));
    let jsonString = localStorage.getItem("cources");
    if(jsonString){
      this.counter = JSON.parse(jsonString) || '{}';
    }
  }
  constructor() { }

  ngOnInit(): void {
    console.log(this.counter);
    let jsonString = localStorage.getItem("cources");
    if(jsonString){
      this.counter = JSON.parse(jsonString) || '{}';
    }
  }

}

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  @Input() cources: any;
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cource',
  templateUrl: './cource.component.html',
  styleUrls: ['./cource.component.css']
})
export class CourceComponent implements OnInit {

  author = "";
  actualPrice = 0;
  dscntPctg = 0.0;
  tags = ["",""];
  constructor() { }

  ngOnInit(): void {
    this.author = "";
  this.actualPrice = 0;
  this.dscntPctg = 0.0;
  this.tags = ["",""];
  }

}

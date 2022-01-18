import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  Counter = [
    {
      name: "HTML",
      author: "Akash",
      addedToWishlist: false,
      addedToCart: false,
      actualPrice: 677,
      dscntPctg: 0.0,
      tags: ["HTML", "CSS"]
    },
    {
      name: "CSS",
      author: "Akash",
      addedToWishlist: false,
      addedToCart: false,
      actualPrice: 230,
      dscntPctg: 0.0,
      tags: ["HTML", "CSS"]
    },
    {
      name: "Javascript",
      author: "Akash",
      addedToWishlist: false,
      addedToCart: false,
      actualPrice: 876,
      dscntPctg: 0.0,
      tags: ["HTML", "Javascript"]
    }
  ];
  // cources: [
  //   {
  //     name: "HTML"
  //     author: "Akash";
  //     addedToWishlist: false;
  //     addedToCart: false;
  //     actualPrice: 677;
  //     dscntPctg: 0.0;
  //     tags: ["HTML", "CSS"];
  //   },
  //   {
  //     name: "CSS";
  //     author: "Akash";
  //     addedToWishlist: false;
  //     addedToCart: false;
  //     actualPrice: 230;
  //     dscntPctg: 0.0;
  //     tags: ["HTML", "CSS"];
  //   },
  //   {
  //     name: "Javascript";
  //     author: "Akash";
  //     addedToWishlist: false;
  //     addedToCart: false;
  //     actualPrice: 876;
  //     dscntPctg: 0.0;
  //     tags: ["HTML", "Javascript"];
  //   }
  // ];
  abc = "Akash";
  constructor() { }

  ngOnInit(): void {
    // localStorage.setItem("cources",JSON.stringify(this.Counter));
  }

}

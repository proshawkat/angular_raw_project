import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-soul',
  templateUrl: './soul.component.html',
  styleUrls: ['./soul.component.css']
})
export class SoulComponent implements OnInit {

  soul_subcategory = [
    {
      "name": "yoga",
      "route": "yoga"
    },
    {
      "name": "meditation",
      "route": "meditation"
    },
    {
      "name": "fitness",
      "route": "fit-ness"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

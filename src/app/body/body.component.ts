import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  body_subcategory = [
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

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SubcategoryService } from '../../services/subcategory/subcategory.service'; 

@Component({
  selector: 'app-subcategory',
  templateUrl: './subcategory.component.html',
  styleUrls: ['./subcategory.component.css']
})
export class SubcategoryComponent implements OnInit {

  subcategoryName: string = '';

  constructor(
    private route: ActivatedRoute,
    private subcategoryService: SubcategoryService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.subcategoryName = params.get('subcategory') ?? '';
      // Fetch data or perform actions based on subcategoryName
      console.log(`Subcategory: ${this.subcategoryName}`);
    });
  }

}

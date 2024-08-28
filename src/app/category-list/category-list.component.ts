import { Component, OnInit } from '@angular/core';
import { SubcategoryService } from '../services/subcategory/subcategory.service';

interface Category {
  name: string;
  route: string;
  subcategories: { name: string; route: string }[];
}

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})

export class CategoryListComponent implements OnInit {
  categories: Category[] = [
    {
      "name": "body",
      "route": "body",
      "subcategories": [
        {
          "name": "yoga",
          "route": "body/yoga"
        },
        {
          "name": "meditation",
          "route": "body/meditation"
        },
        {
          "name": "fitness",
          "route": "body/fitness"
        }
      ]
    },
    {
      "name": "soul",
      "route": "soul",
      "subcategories": [
        {
          "name": "inspirational-videos",
          "route": "soul/inspirational-videos"
        },
        {
          "name": "quotes",
          "route": "soul/quotes"
        },
        {
          "name": "music",
          "route": "soul/music"
        }
      ]
    }
  ]; // Array to hold the categories

  constructor(private subcategoryService: SubcategoryService) {}

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories(): void {
    // Static categories (Body and Soul)
    const staticCategories = ['body', 'soul'];

  //   staticCategories.forEach(categoryName => {
  //     this.subcategoryService.getSubcategories(categoryName).subscribe(subcategories => {
  //       const category: Category = {
  //         name: categoryName,
  //         route: categoryName,
  //         subcategories: subcategories
  //       };
  //       this.categories.push(category);
  //     });
  //   });
   }
}
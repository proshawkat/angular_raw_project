import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Subcategory {
  name: string;
  route: string;
}

@Injectable({
  providedIn: 'root'
})
export class SubcategoryService {
  private apiUrl = 'http://localhost:4200'; // Replace with your API URL

  constructor(private http: HttpClient) {}

  // Fetch subcategories for a given category
  getSubcategories(category: string): Observable<Subcategory[]> {
    return this.http.get<Subcategory[]>(`${this.apiUrl}?category=${category}`);
  }
}

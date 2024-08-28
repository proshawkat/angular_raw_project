import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubcategoryComponent } from '../components/subcategory/subcategory.component';


@NgModule({
  declarations: [SubcategoryComponent],
  imports: [CommonModule],
  exports: [SubcategoryComponent]
})
export class SharedModule {}

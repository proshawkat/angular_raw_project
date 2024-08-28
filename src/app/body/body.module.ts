import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { SubcategoryComponent } from '../components/subcategory/subcategory.component';
import { SharedModule } from '../shared/shared.module';
import { BodyComponent } from './body.component';

const routes: Routes = [
  { path: '', component: BodyComponent },
  { path: ':subcategory', component: SubcategoryComponent }
];

@NgModule({
  declarations: [
    BodyComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class BodyModule { }

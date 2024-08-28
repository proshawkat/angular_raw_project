import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubcategoryComponent } from '../components/subcategory/subcategory.component';
import { SoulComponent } from './soul.component';
import { SubcategoryService } from '../services/subcategory/subcategory.service';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: SoulComponent },
  { path: ':subcategory', component: SubcategoryComponent }
];

@NgModule({
  declarations: [
    SoulComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})

export class SoulModule { }

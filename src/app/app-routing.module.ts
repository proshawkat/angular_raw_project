import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryListComponent } from './category-list/category-list.component';

const routes: Routes = [
    { path: 'body', loadChildren: () => import('./body/body.module').then(m => m.BodyModule) },
    { path: 'soul', loadChildren: () => import('./soul/soul.module').then(m => m.SoulModule) },
    // Define your root-level routes here
    { path: '', component:CategoryListComponent},
    { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

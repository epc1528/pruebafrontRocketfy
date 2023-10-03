import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailproductComponent } from './component/detailproduct/detailproduct.component';
import { ListproductComponent } from './component/listproduct/listproduct.component';
import { CreateproductComponent } from './component/createproduct/createproduct.component';

const routes: Routes = [
  {path:"", component: ListproductComponent},
  {path:"detail-product", component: DetailproductComponent},
  {path:"create-product", component: CreateproductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { UserComponent } from './user/user.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'wishlist', component: WishlistComponent },
  { path: 'course', component: DashboardComponent },
  { path: 'cart', component: CartComponent },
  { path: 'profile', component: UserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

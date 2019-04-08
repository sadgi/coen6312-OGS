import {Route} from '@angular/router';
import {AppComponent} from './app.component';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {ProductComponent} from './product/product.component';
import {SubcategoryComponent} from './subcategory/subcategory.component';
import {DairyproductsComponent} from './dairyproducts/dairyproducts.component';
import {MeatandpoultryComponent} from './meatandpoultry/meatandpoultry.component';
import {BakeryComponent} from './bakery/bakery.component';
import {CartComponent} from './cart/cart.component';
import {OrderplacedComponent} from './orderplaced/orderplaced.component';

export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'product',
    component: ProductComponent
  },
  {
    path: 'subcategory',
    component: SubcategoryComponent
  },
  {
    path: 'dairy',
    component: DairyproductsComponent
  },
  {
    path: 'meatpoultry',
    component: MeatandpoultryComponent
  },
  {
    path: 'bakery',
    component: BakeryComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'orderplaced',
    component: OrderplacedComponent
  },
  {
    path: '**',
    redirectTo: 'login',
  },

];

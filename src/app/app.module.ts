import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {appRoutes} from './app.route';
import {RouterModule} from '@angular/router';
import {DemoMaterialModule} from './material.module';
import {ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {ProductComponent} from './product/product.component';
import {SubcategoryComponent} from './subcategory/subcategory.component';
import {BakeryComponent} from './bakery/bakery.component';
import {MeatandpoultryComponent} from './meatandpoultry/meatandpoultry.component';
import {DairyproductsComponent} from './dairyproducts/dairyproducts.component';
import {CartComponent} from './cart/cart.component';
import {OrderplacedComponent} from './orderplaced/orderplaced.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    ProductComponent,
    SubcategoryComponent,
    BakeryComponent,
    MeatandpoultryComponent,
    DairyproductsComponent,
    CartComponent,
    OrderplacedComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    DemoMaterialModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

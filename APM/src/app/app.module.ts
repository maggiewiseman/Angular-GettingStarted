import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { ConvertToSpacePipe } from './shared/convertToSpaces.pipe';
import { StarComponent } from './shared/star.component';
import { ProductService } from './products/product.service'
import { HttpClientModule } from '@angular/common/http';
import { ProductDetailComponent } from './products/product-detail.component';
import { WelcomeComponent } from './home/welcome.component';

import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent, ProductListComponent,
    ConvertToSpacePipe, StarComponent, ProductDetailComponent, WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
        {path: 'products', component: ProductListComponent },
        {path: 'products/:id', component: ProductDetailComponent },
        {path: 'welcome', component: WelcomeComponent },
        {path: '', redirectTo: 'welcome', pathMatch: 'full' },
        {path: '**', redirectTo: 'welcome', pathMatch: 'full'  },
    ])
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }

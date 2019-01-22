import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  {path: '', loadChildren: './home/home.module#HomeModule'},
  {path : 'category', loadChildren: './product-listing/product-listing.module#ProductListingModule'},
  {path: 'contact-us', loadChildren: './contact-us/contact-us.module#ContactUsModule'},
  {path: 'about-us', loadChildren: './about-us/about-us.module#AboutUsModule'},
  {path: 'security-and-privacy', loadChildren: './security-and-privacy/security-and-privacy.module#SecurityAndPrivacyModule'},
  {path: 'terms-and-conditions', loadChildren: './terms-and-conditions/terms-and-conditions.module#TermsAndConditionsModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

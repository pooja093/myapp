import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'analytics',component:AnalyticsComponent},
  {path:'products',component:ProductsComponent},
  {path:'settings',component:SettingsComponent},
  {path:'contact',component:ContactComponent},
  {path:'about',component:AboutComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  //{ path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}

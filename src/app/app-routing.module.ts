import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PrivatePolicyComponent } from './private-policy/private-policy.component';


const routes: Routes = [
  {path:  '', pathMatch:  'full', redirectTo:  'home'},
  {path:  'home', component: HomeComponent},
  {path:  'services', component: ServicesComponent},
  {path:  'about-us', component: AboutUsComponent},
  {path:  'gallery', component: GalleryComponent},
  {path:  'contact-us', component: ContactUsComponent},
  {path:  'policy', component: PrivatePolicyComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

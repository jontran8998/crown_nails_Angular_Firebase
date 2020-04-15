import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Need FormsModule for *ngFor and other things
import { FormsModule } from '@angular/forms';

// Set up for Firebase
import { AngularFireModule} from '@angular/fire';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment} from '../environments/environment';

// Add other custom components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ScriptHackComponent } from './scripthack/scripthack.component';

// Add Service
import {ItemsService} from './service/items.service';
import { PrivatePolicyComponent } from './private-policy/private-policy.component';


@NgModule({
   declarations: [
      AppComponent,
      HomeComponent,
      ServicesComponent,
      ContactUsComponent,
      AboutUsComponent,
      GalleryComponent,
      HeaderComponent,
      FooterComponent,
      ScriptHackComponent,
      PrivatePolicyComponent,
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      AngularFireModule.initializeApp(environment.firebase),
      AngularFirestoreModule,
      AngularFireAnalyticsModule
   ],
   providers: [
      ItemsService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SliderComponent } from './components/slider/slider.component';
import { Amemities3colComponent } from './components/amemities3col/amemities3col.component';
import { ParallaxComponent } from './components/parallax/parallax.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { ContactComponent } from './components/contact/contact.component';
import { PhotogalleryComponent } from './components/photogallery/photogallery.component';
import { IconboxesComponent } from './components/iconboxes/iconboxes.component';
import { PopularComponent } from './components/popular/popular.component';
import { SocialmediaComponent } from './components/socialmedia/socialmedia.component';
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, SliderComponent, Amemities3colComponent, ParallaxComponent, SearchbarComponent, ContactComponent, PhotogalleryComponent, IconboxesComponent, PopularComponent, SocialmediaComponent, MainComponent, FooterComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

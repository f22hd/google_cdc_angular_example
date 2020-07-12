import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';

import {HttpClientModule} from '@angular/common/http'
import { PostItemComponent } from './core/components/post-item/post-item.component';
import { PostDetailComponent } from './pages/post-detail/post-detail.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { TitlePipe } from './core/pipes/title.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PostItemComponent,
    PostDetailComponent,
    FooterComponent,
    HeaderComponent,
    TitlePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';

import {HttpClientModule} from '@angular/common/http'
import { PostItemComponent } from './core/components/post-item/post-item.component';
import { PostDetailComponent } from './pages/post-detail/post-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PostItemComponent,
    PostDetailComponent,
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

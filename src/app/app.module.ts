import { HttpClient, HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BlockComponent } from './components/block/block.component';
import { DataserviseService } from './dataservise.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlockComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

  ],
  providers: [
    DataserviseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

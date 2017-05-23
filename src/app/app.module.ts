//components
import { AppComponent }  from './app.component';
import { HomePageComponent } from './pages/home/home-page-component';
import { DetailsPageComponent } from './pages/details/details-page.component';
import { FavoritesPageComponent } from './pages/favorites/favorites-page.component';

//modules
import { SharedModule } from './dummy/shared-module';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { JsonpModule } from '@angular/http';
import { Routes, RouterModule } from "@angular/router";

//services
import { RequestService } from './services/requestService';
import { DataFlowService } from './services/dataFlowService';
import { SessionService } from './services/sessionService';
import { DataStorageService } from './services/dataStorageService';
import { StorageService } from "./services/storageService";

//routing
const appRoutes: Routes =[
  { path: 'home', component: HomePageComponent},
  { path: '', component: HomePageComponent},
  { path: 'details', component: DetailsPageComponent},
  { path: 'favorites', component: FavoritesPageComponent}
];

@NgModule({
  imports:      [ BrowserModule, SharedModule, HttpModule, JsonpModule, RouterModule.forRoot(appRoutes) ],
  declarations: [ AppComponent, HomePageComponent, DetailsPageComponent, FavoritesPageComponent ],
  providers:    [ RequestService, DataFlowService, SessionService, DataStorageService, StorageService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

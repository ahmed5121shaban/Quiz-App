import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResultsComponent } from '../results/results.component';
import { HomeComponent } from '../home/home.component';
import { NotFoundComponent } from '../not-found/not-found.component';



@NgModule({
  declarations: [
    AppComponent,
    ResultsComponent,
    HomeComponent,
    NotFoundComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

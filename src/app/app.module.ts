import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResultsComponent } from '../results/results.component';
import { HomeComponent } from '../home/home.component';
import { NotFoundComponent } from '../not-found/not-found.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AngularQuestionsComponent } from '../angular-questions/angular-questions.component';
import { CsQuestionsComponent } from '../cs-questions/cs-questions.component';
import { SqlServerComponent } from '../sql-server/sql-server.component';



@NgModule({
  declarations: [
    AppComponent,
    ResultsComponent,
    HomeComponent,
    NotFoundComponent,
    AngularQuestionsComponent,
    CsQuestionsComponent,
    SqlServerComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(
      withFetch()
    )

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

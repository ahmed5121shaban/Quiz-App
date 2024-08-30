import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResultsComponent } from '../results/results.component';
import { HomeComponent } from '../home/home.component';
import { NotFoundComponent } from '../not-found/not-found.component';
import { AngularQuestionsComponent } from '../angular-questions/angular-questions.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"angular",component:AngularQuestionsComponent},
  {path:"results",component:ResultsComponent},
  {path:"**",component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

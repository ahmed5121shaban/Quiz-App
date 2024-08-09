import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionsComponent } from '../questions/questions.component';
import { ResultsComponent } from '../results/results.component';

const routes: Routes = [
  {path:"",component:QuestionsComponent},
  {path:"results",component:ResultsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

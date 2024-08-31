import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../Services/Questions.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  result!:number
  length!:number

  constructor(private server:QuestionsService) {
    this.server.fResult().subscribe((res:any)=>this.result = res);
    this.server.allAngularQuestions().subscribe((res:any)=>{this.length = res.quizAngular.questions.length})
    this.server.allCsQuestions().subscribe((res:any)=>{this.length = res.quizCSharp.questions.length})
   }

  ngOnInit() {}

}

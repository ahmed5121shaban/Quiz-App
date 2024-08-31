import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { QuestionsService } from '../Services/Questions.service';

@Component({
  selector: 'app-angular-questions',
  templateUrl: './angular-questions.component.html',
  styleUrls: ['./angular-questions.component.css']
})
export class AngularQuestionsComponent implements OnInit {

  questions!:any[];
  questionsNo=1
  result=0;
  answer!:HTMLInputElement

  //@ViewChild('answerValue') answers!:ElementRef

  constructor(private server:QuestionsService) {
  }


  ngOnInit() {
    this.server.allQuestions().subscribe((res:any)=>this.questions=res.quiz.questions);

  }

  nextQ(){
    if (this.questionsNo == (this.questions.length)) {
      return;
    }
    if(this.answer.value == this.questions[this.questionsNo-1].answer)
      {
        this.result++;
        this.server.finallyResult(this.result);
      }
    this.answer.checked = false;
    console.log(this.answer.value);
    console.log(this.questions[this.questionsNo-1].answer);
    this.questionsNo++;
  }


  backToQ(){
    if (this.questionsNo == 1) {
      return;
    }
    this.questionsNo--;
  }

  choice(value:HTMLInputElement){
    this.answer = value;

  }
}

import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../Services/Questions.service';

@Component({
  selector: 'app-cs-questions',
  templateUrl: './cs-questions.component.html',
  styleUrls: ['./cs-questions.component.css']
})
export class CsQuestionsComponent implements OnInit {

  questions!:any[];
  questionsNo=1
  result=0;
  answer!:HTMLInputElement

  constructor(private server:QuestionsService) { }

  ngOnInit() { this.server.allCsQuestions().subscribe((res:any)=>this.questions=res.quizCSharp.questions);
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

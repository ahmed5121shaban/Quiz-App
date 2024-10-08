import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  result=0
  subject:BehaviorSubject<number>;

constructor(private http:HttpClient) {
  this.subject = new BehaviorSubject<number>(0)
}

allAngularQuestions(){
  return this.http.get("AngularQuestions.json");
}
allCsQuestions(){
  return this.http.get("CsQuestions.json");
}
allSQLServerQuestions(){
  return this.http.get("SqlServer.json");
}

finallyResult(res:number){
  this.result = res;
  this.subject.next(this.result);
}

fResult():BehaviorSubject<number>{return this.subject}
}

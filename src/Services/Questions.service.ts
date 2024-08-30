import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

constructor(private http:HttpClient) {}

allQuestions(){
  return this.http.get("AngularQuestions.json");
}

}

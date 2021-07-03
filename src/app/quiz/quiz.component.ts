import { Component, OnInit } from '@angular/core';
import { Quiz } from '../model/quiz';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  quiz: Quiz;

  constructor(private service: ServiceService) { }

  ngOnInit(): void {
    let min = 1, max = 7;
    this.quiz = this.service.getQuizById((Math.random()*(max - min) + min).toString())
  }

  onSubmit( ){
    
  }
}

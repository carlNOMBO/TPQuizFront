import { Injectable } from '@angular/core';
import { User } from './model/user';
import { HttpClient } from '@angular/common/http'
import { Quiz } from './model/quiz';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  user: User;

  constructor(private http: HttpClient) { }

  connexion(login: String, pwd: String): User
  {
    let u : User = null;
    u = this.http.get<User>('http://localhost:8480/connexion/'+login+'/'+pwd);
    return u;
  }

  getQuizById(id: String): Quiz{
    let q : Quiz = null;
    q = this.http.get<Quiz>('http://localhost:8380/quiz/'+id);
    return q;
  }

  soumettre(idUser: String, idQuiz: String, date: Date, score: number){
    let res = this.http.post('http://localhost:8480/valider/',
    {
      "date":date,
      "score":score,
      "idUser":idUser,
      "idQuiz":idQuiz
    });
    return res;
  }
}

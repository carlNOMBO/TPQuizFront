import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { QuizComponent } from './quiz/quiz.component';


const routes: Routes = [
  { path: 'auth', component: AuthComponent },
  { path: 'quiz', component: QuizComponent },
  { path: '**', redirectTo: 'dashboard' , pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

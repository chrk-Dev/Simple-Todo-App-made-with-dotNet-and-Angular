import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../models/todo.Models';



@Injectable({
  providedIn: 'root'
})
export class TodoService {

  baseApiUrl: string = "http://localhost:5104/api"

  constructor(private http: HttpClient) { }

  getAllTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.baseApiUrl + '/todo')
  }



  addTodo(newTodo: Todo): Observable<Todo> {
    newTodo.id = '00000000-0000-0000-0000-000000000000'
    return this.http.post<Todo>(this.baseApiUrl + '/todo', newTodo)
  }

  updatetodo(id: string, todo: Todo): Observable<Todo> {
    return this.http.put<Todo>(this.baseApiUrl + '/todo/' + id, todo)
  }

  deleteTodo(id:string):Observable<Todo>{
    return this.http.delete<Todo>(this.baseApiUrl+'/todo/'+id)
  }

}

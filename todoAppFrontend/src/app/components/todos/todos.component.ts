import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/todo.Models';
import { CommonModule } from '@angular/common';
import { TodoService } from '../../services/todo.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})

export class TodosComponent implements OnInit {





  todos: Todo[] = []

  newTodo: Todo = {
    createdDate: new Date(),
    id: '',
    description: '',
    iscompleted: false,
    completedDate: new Date()
  }


  constructor(private todoservice: TodoService) { }

  ngOnInit(): void {
    this.getAllTodo()
  }

  getAllTodo() {
    this.todoservice.getAllTodos()
      .subscribe({
        next: (todos) => {
          this.todos = todos
        }
      })
  }

  addTodo() {
    this.todoservice.addTodo(this.newTodo)
      .subscribe({
        next: () => {
          this.getAllTodo()
          this.newTodo.description=''
        }
      })



  }
  onCompletedChange(id: string, todo: Todo) {
    todo.iscompleted=!todo.iscompleted
    this.todoservice.updatetodo(id, todo)
      .subscribe({
        next: () => {
          this.getAllTodo();
        }
      })
  }

  deleteTodo(id:string){
    this.todoservice.deleteTodo(id)
    .subscribe({
      next:()=>{
        this.getAllTodo()
      }
    })
  }


}



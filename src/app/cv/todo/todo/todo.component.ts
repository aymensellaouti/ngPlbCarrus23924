import { Component, inject } from "@angular/core";
import { TodoService } from "../service/todo.service";
import { Todo } from "../model/todo";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  // providers: [TodoService]
})
export class TodoComponent {
  // State de notre composant :
  todoService = inject(TodoService);
  /**
   * La liste des todos que je vais afficher
   */
  todos: Todo[] = this.todoService.getTodos();
  /**
   * Le todo à ajoutert à la liste
   */
  todo: Todo = new Todo();
  constructor() {}

  addTodo() {
    this.todoService.addTodo(this.todo);
    this.todo = new Todo();
  }

  deleteTodo(todo: Todo) {
    this.todoService.deleteTodo(todo);
  }
}

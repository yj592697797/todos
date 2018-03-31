import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { UUID } from 'angular2-uuid';
import { Todo } from './todo.model';
import { Observable } from 'rxjs/Observable';
import { map } from "rxjs/operators/map";

@Injectable()
export class TodoService {
  todos: Todo[] = [];
  private api_url = 'api/todos';
  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: Http) { }

  add(desc: string): Promise<Todo> {
    let todo: Todo = {
      id: UUID.UUID(),
      desc: desc,
      completed: false
    };
    return this.http
      .post(this.api_url, JSON.stringify(todo), { headers: this.headers })
      .toPromise()
      .then(res => res.json() as Todo)
      .catch(this.handleError)
  }

  getAll(): Observable<Todo[]> {
    return this.http
      .get(this.api_url, { headers: this.headers })
      .pipe(
        map(res => res.json())
      );
      // .toPromise()
      // .then(res => res.json() as Todo[])
      // .catch(this.handleError);
  }

  delete(id: string): Promise<void> {
    const url = `${this.api_url}/${id}`;
    return this.http
      .delete(url)
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  private handleError(error: any) {
    console.error('an error occurred', error);
    return Promise.reject(error.message || error);
  }
}

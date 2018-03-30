import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Todo } from './todo.model';

export class InMemoryTodoDbService implements InMemoryDbService {
    createDb() {
        let todos: Todo[] = [
            { id: '001', desc: 'play a ball', completed: false },
            { id: '002', desc: 'read a book', completed: false },
            { id: '003', desc: 'watch a movie', completed: false }
        ];

        return { todos };
    }
}
import { Todo } from '../App';
import TodoListItem from './TodoListItem';

interface TodoListProps {
  todoList: Todo[];
  onDeleteTodo: (id: string) => void;
}

export default function TodoList({ todoList, onDeleteTodo }: TodoListProps) {
  return (
    <div>
      {todoList.map((todo) => (
        <TodoListItem key={todo.id} todoItem={todo} onDelete={onDeleteTodo} />
      ))}
    </div>
  );
}

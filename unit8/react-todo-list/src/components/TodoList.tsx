import { Todo } from '../App';
import TodoListItem from './TodoListItem';

interface TodoListProps {
  todoList: Todo[];
  onDeleteTodo: (id: string) => void;
}

export default function TodoList({ todoList, onDeleteTodo }: TodoListProps) {
  // The map method is used to render a list of items in an array in our JSX.
  return (
    <div>
      {todoList.map((todo) => (
        <TodoListItem key={todo.id} todoItem={todo} onDelete={onDeleteTodo} />
      ))}
    </div>
  );
}

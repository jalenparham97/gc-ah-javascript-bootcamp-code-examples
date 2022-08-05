import { useContext } from 'react';
import { Todo } from '../App';
import { TodoContext } from '../context/todo-context';
import TodoListItem from './TodoListItem';

interface TodoListProps {
  // todoList: Todo[];
  onDeleteTodo?: (id: string) => void;
  children: React.ReactNode;
}

export default function TodoList({
  // todoList,
  // onDeleteTodo,
  children,
}: TodoListProps) {
  const { todoList } = useContext(TodoContext);
  // The map method is used to render a list of items in an array in our JSX.
  return (
    <div>
      {children}
      {todoList.map((todo) => (
        // <TodoListItem key={todo.id} todoItem={todo} onDelete={onDeleteTodo} />
        <TodoListItem key={todo.id} todoItem={todo} />
      ))}
    </div>
  );
}

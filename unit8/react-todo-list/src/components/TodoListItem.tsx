import { useContext } from 'react';
import { Todo } from '../App';
import { TodoContext } from '../context/todo-context';

interface TodoListItemProps {
  todoItem: Todo;
  onDelete?: (id: string) => void;
}

export default function TodoListItem({
  todoItem,
}: // onDelete,
TodoListItemProps) {
  const { deleteTodo } = useContext(TodoContext);

  return (
    <div style={{ display: 'flex', gap: 10 }}>
      <p>{todoItem.text}</p>
      {/* <button onClick={() => onDelete(todoItem.id)}>Delete</button> */}
      <button onClick={() => deleteTodo(todoItem.id)}>Delete</button>
    </div>
  );
}

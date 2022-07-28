import { Todo } from '../App';

interface TodoListItemProps {
  todoItem: Todo;
  onDelete: (id: string) => void;
}

export default function TodoListItem({
  todoItem,
  onDelete,
}: TodoListItemProps) {
  return (
    <div style={{ display: 'flex', gap: 10 }}>
      <p>{todoItem.text}</p>
      <button onClick={() => onDelete(todoItem.id)}>Delete</button>
    </div>
  );
}

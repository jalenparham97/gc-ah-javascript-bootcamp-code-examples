import { nanoid } from 'nanoid';
import { useState } from 'react';
import { Todo } from '../App';

interface TodoFormProps {
  onSubmit: (todo: Todo) => void;
}

export default function TodoForm({ onSubmit }: TodoFormProps) {
  const [todo, setTodo] = useState<Todo>({ id: '', text: '' });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    return setTodo({ id: nanoid(), text: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    onSubmit(todo);
    clearFormValues();
  }

  function clearFormValues() {
    setTodo({ id: '', text: '' });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="todo"
        placeholder="Enter a todo"
        value={todo.text}
        onChange={handleChange}
      />
      <button type="submit">Add</button>
    </form>
  );
}

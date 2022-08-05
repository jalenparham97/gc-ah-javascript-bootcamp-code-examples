import { nanoid } from 'nanoid';
import { useContext, useState } from 'react';
import { Todo } from '../App';
import { TodoContext } from '../context/todo-context';

// We define what the prop type is with the interface.
interface TodoFormProps {
  onSubmit?: (todo: Todo) => void; // Void means we return nothing.
}

// We consume our props in the parameter of our Component by destructuring them.
// We can then use them within our component.
export default function TodoForm({ onSubmit }: TodoFormProps) {
  const [todo, setTodo] = useState<Todo>({ id: '', text: '' });
  const { addTodo } = useContext(TodoContext);

  // React.ChangeEvent<HTMLInputElement> tells use we will get an event object specifically for the HTML input element.
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    return setTodo({ id: nanoid(), text: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // onSubmit(todo);
    addTodo(todo);
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
        onChange={handleChange} // Same thing as onChange={(e) => handleChange(e)}
      />
      <button type="submit">Add</button>
    </form>
  );
}

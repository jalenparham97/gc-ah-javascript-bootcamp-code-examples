import { nanoid } from 'nanoid';
import { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './App.css';

export interface Todo {
  id: string;
  text: string;
}

function App() {
  const [todo, setTodo] = useState<Todo>({ id: '', text: '' });
  const [todoList, setTodoList] = useState<Todo[]>([]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    return setTodo({ id: nanoid(), text: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setTodoList([todo, ...todoList]);
    clearFormValues();
  }

  function handleDeleteTodoItem(id: string) {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  }

  function clearFormValues() {
    setTodo({ id: '', text: '' });
  }

  return (
    <div className="App">
      <h1>Todo List</h1>

      {/* This how you would use the icon component after importing it */}
      {/* <IconTrash size={24} /> */}

      <TodoForm
        value={todo.text}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />

      <TodoList todoList={todoList} onDeleteTodo={handleDeleteTodoItem} />
    </div>
  );
}

export default App;

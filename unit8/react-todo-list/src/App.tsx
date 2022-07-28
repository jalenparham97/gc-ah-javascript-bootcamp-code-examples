import { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './App.css';

export interface Todo {
  id: string;
  text: string;
}

function App() {
  const [todoList, setTodoList] = useState<Todo[]>([]);

  function handleSubmit(todo: Todo) {
    setTodoList([todo, ...todoList]);
  }

  function handleDeleteTodoItem(id: string) {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  }

  return (
    <div className="App">
      <h1>Todo List</h1>
      {/* This how you would use the icon component after importing it */}
      {/* <IconTrash size={24} /> */}
      <TodoForm onSubmit={handleSubmit} />
      <TodoList todoList={todoList} onDeleteTodo={handleDeleteTodoItem} />
    </div>
  );
}

export default App;

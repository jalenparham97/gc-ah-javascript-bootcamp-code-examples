import { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './App.css';
import Card from './components/Card';

export interface Todo {
  id: string;
  text: string;
}

// A function that is Capitalized and returns JSX and exported is called a component.
function App() {
  // useState allows us to specify values that we can use in our components.
  // These values are set using the useState hook so React can update / rerender the component when thay change.

  // Destructuring the state variable and the state setter function / state update function from the the array that is returned from the useState function / hook.
  // [state - state variable,  setState - state setter funtion] = useState();
  // [todoList - state variable, setTodoList - state setter funtion] = useState<Todo[]>([]);
  const [todoList, setTodoList] = useState<Todo[]>([]); // The angle brackets in the useState tells what type the state variable will be.

  function handleSubmit(todo: Todo) {
    setTodoList([todo, ...todoList]); // Updating the state of our todoList state variable.
  }

  function handleDeleteTodoItem(id: string = '1') {
    setTodoList(todoList.filter((todo) => todo.id !== id));

    // const array = [
    //   { id: '1', text: 'Hello World' },
    //   { id: '2', text: 'Hello World 2' },
    // ];

    // const newArray = array.filter((item) => {
    //   if (item.id === id) {
    //     return false { id: '1', text: 'Hello World' };
    //   } else if (item.id !== id) {
    //     return true { id: '2', text: 'Hello World 2' };
    //   }
    // });

    // newArray = [{ id: '2', text: 'Hello World 2' }];
  }

  // JSX / HTML - We write JSX to tell React what to render on the screen.
  return (
    <div className="App">
      <h1>Todo List</h1>
      <Card title="Card 1 Title">
        <h4>Hi Card 1</h4>
      </Card>
      <Card>
        <h4>Hi Card 2</h4>
      </Card>
      <Card title="Card 3 Title">
        <h4>Hi Card 3</h4>
      </Card>
      {/* This how you would use the icon component after importing it */}
      {/* <IconTrash size={24} /> */}
      {/* <TodoForm onSubmit={handleSubmit} /> Component */}
      <TodoForm />
      {/* <TodoList todoList={todoList} onDeleteTodo={handleDeleteTodoItem}> */}
      <TodoList>
        <h2>This is todo list children</h2>
      </TodoList>
      {/* Component */}
    </div>
  );
}

export default App;

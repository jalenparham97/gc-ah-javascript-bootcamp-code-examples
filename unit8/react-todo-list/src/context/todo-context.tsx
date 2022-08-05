import { createContext, useState } from 'react';
import { Todo } from '../App';

interface TodoContextModel {
  todoList: Todo[];
  addTodo: (todo: Todo) => void;
  deleteTodo: (id: string) => void;
}

export const TodoContext = createContext<TodoContextModel>({
  todoList: [],
  addTodo: () => {},
  deleteTodo: () => {},
});

interface Props {
  children: React.ReactNode;
}

export function TodoContextProvider({ children }: Props) {
  const [todoList, setTodoList] = useState<Todo[]>([]);

  function addTodo(todo: Todo) {
    setTodoList([todo, ...todoList]);
  }

  function deleteTodo(id: string) {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  }

  return (
    <TodoContext.Provider value={{ todoList, addTodo, deleteTodo }}>
      {children}
    </TodoContext.Provider>
  );
}

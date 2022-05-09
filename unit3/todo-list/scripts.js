let todoList = [];

function randomId() {
  const uint32 = window.crypto.getRandomValues(new Uint32Array(1))[0];
  return uint32.toString(16);
}

const addTodo = (todo) => {
  todoList.unshift(todo);
  return todoList;
};

addTodo({ text: 'New todo', isCompleted: false, id: '1' });
addTodo({ text: 'Another new todo', isCompleted: false, id: '2' });
addTodo({ text: 'Another new todo', isCompleted: false, id: '3' });
addTodo({ text: 'Take the trash out', isCompleted: false, id: '4' });
addTodo({ text: 'Clean room', isCompleted: false, id: '5' });
addTodo({ text: 'Study notes', isCompleted: false, id: '6' });

const removeTodo = (id) => {
  const updatedTodoList = todoList.filter((todo) => todo.id !== id);
  todoList = updatedTodoList;
  return todoList;
};

removeTodo('4');

// todoList.forEach((todo) => console.log(todo));

const updateTodo = (id, todoUpdateObject) => {
  // const updateIndex = todoList.findIndex(
  //   (currentTodo) => currentTodo.id === id
  // );
  // todoList.splice(updateIndex, 1, todoUpdateObject);
  const updatedTodoList = todoList.map((currentTodo) => {
    if (currentTodo.id === id) {
      return { ...currentTodo, ...todoUpdateObject };
    }

    return currentTodo;
  });
  todoList = updatedTodoList;
  return todoList;
};

const newTodoList = todoList.map((todo) => 'Jalen');

// console.log({ newTodoList: newTodoList });

updateTodo('2', { text: 'May 9, 2022' });
updateTodo('2', { isCompleted: true });

// console.log({ todoList: todoList });

// 1. Create VendingMachine array
//     Every Item has a name, a code, a quantity, a price (give it 2 items to start)

// 2. Add item to VendingMachine ( pass array a parameter, build item inside function) (think about what that means the parameters will be)

// 3. update quantity

// 4. update price

// 5. remove item from stock (by code)

// 6. Report inventory (show all in stock)

// 7. Get Item from vendingMachine (for now do not worry about price, we can add that in later)

// extended challenges

// 8. Get item takes in money, checks to make sure it is the correct amount. If not console.log('Need the price of the item (as the specific item price), you only have money(value put into machine)) If it is the correct amount or more, return item and change

// 9. Get item reduces the amount of stock(what would you use that would keep you from writing it all out?)

let vendingMachine = [
  { name: 'twix', code: 'A320', quantity: 4, price: 6.5 },
  { name: 'snickers', code: 'B430', quantity: 2, price: 4.0 },
];

// 2. Add item to VendingMachine ( pass array a parameter, build item inside function) (think about what that means the parameters will be)

const addItem = (array, name, code, quantity, price) => {
  array.push({ name: name, code: code, quantity: quantity, price: price }); // can also be written shorthand: name, code, quantity, price
};

// 3. update quantity (by code)

const updateQuantity = (array, code, quantity) => {
  console.log(array);
  const updatedArray = array.map((currentObject) => {
    console.log(currentObject);
    if (currentObject.code === code) {
      console.log('currentObject', true);
      return { ...currentObject, quantity: quantity };
    }
    console.log(false);
    return currentObject; // telling the function not to touch the object if it doesn't match criteria
  });

  array = updatedArray; // telling the array to return the updated array
  return array;
};

updateQuantity(vendingMachine, 'A320', 2);

console.log(vendingMachine);

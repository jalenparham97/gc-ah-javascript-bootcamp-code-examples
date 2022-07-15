import express from 'express';
import { nanoid } from 'nanoid';
import { books, users } from '../data';
import { Book, User } from '../types';

export const userRouter = express.Router();

userRouter
  .route('/')
  .get((req, res) => {
    const { minBooksCheckedOut } = req.query;

    // Check to see if the minBooksCheckedOut query exists
    if (minBooksCheckedOut) {
      const minBooksUsers = users.filter(
        (user) => user.booksCheckedOut.length >= Number(minBooksCheckedOut)
      );
      res.status(200).send(minBooksUsers);
    }

    res.status(200).send(users);
  })
  .post((req, res) => {
    const newUser: User = { id: nanoid(5), booksCheckedOut: [], ...req.body };
    users.push(newUser);
    res.status(201).send(newUser);
  });

userRouter
  .route('/:id')
  .get((req, res) => {
    const { id } = req.params;
    // Find the user with the given id using the find array method.
    const user = users.find((userObject) => userObject.id === id);
    // Check if the user does not exist and if not then send the 404 status.
    if (!user) res.status(404).send(`User with id ${id} Not Found`);

    res.status(200).send(user);
  })
  .patch((req, res) => {
    const { id } = req.params;
    const user = users.find((userObject) => userObject.id === id);
    if (!user) res.status(404).send(`User with id ${id} Not Found`);

    const userIndex = users.findIndex((user) => user.id === id);
    const updatedUser = { ...user, ...req.body };
    users.splice(userIndex, 1, updatedUser);

    res.status(200).send(updatedUser);
  })
  .delete((req, res) => {
    const { id } = req.params;
    const userIndex = users.findIndex((user) => user.id === id);
    if (userIndex === -1) res.status(404).send(`User with id ${id} Not Found`);

    users.splice(userIndex, 1);
    res.sendStatus(204);
  });

userRouter.route('/:id/books').get((req, res) => {
  const { id } = req.params;
  const user = users.find((userObject) => userObject.id === id) as User;
  if (!user) res.status(404).send(`User with id ${id} Not Found`);

  let userBooks: Book[] = [];

  for (let i = 0; i < books.length; i++) {
    for (let j = 0; j < user.booksCheckedOut.length; j++) {
      if (user.booksCheckedOut[j] === books[i].id) {
        userBooks.push(books[i]);
      }
    }
  }

  res.status(200).json(userBooks);
});

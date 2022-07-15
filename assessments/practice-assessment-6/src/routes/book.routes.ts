import express from 'express';
import { nanoid } from 'nanoid';
import { books, users } from '../data';
import { Book, User } from '../types';

export const bookRouter = express.Router();

bookRouter
  .route('/')
  .get((req, res) => {
    const { isCheckedOut } = req.query;

    // Checking to see if isCheckedOut exists e.g not undefined
    if (isCheckedOut) {
      if (isCheckedOut === 'true') {
        const booksCheckedOut = books.filter((book) => book.isCheckedOut);
        res.status(200).json(booksCheckedOut);
      } else {
        const booksNotCheckedOut = books.filter((book) => !book.isCheckedOut);
        res.status(200).json(booksNotCheckedOut);
      }
    }

    res.status(200).json(books);
  })
  .post((req, res) => {
    const newBook: Book = { id: nanoid(5), ...req.body };
    books.push(newBook);
    res.status(201).json(newBook);
  });

bookRouter
  .route('/:id')
  .get((req, res) => {
    const { id } = req.params;
    const book = books.find((book) => book.id === id);
    if (!book) res.status(404).json(`Book with id ${id} Not Found`);
    res.status(200).json(book);
  })
  .patch((req, res) => {
    const { id } = req.params;
    const book = books.find((book) => book.id === id);
    if (!book) res.status(404).json(`Book with id ${id} Not Found`);

    const bookIndex = books.findIndex((book) => book.id === id);
    const updatedBook = { ...book, ...req.body };
    books.splice(bookIndex, 1, updatedBook);
    res.status(200).json(updatedBook);
  })
  .delete((req, res) => {
    const { id } = req.params;
    const bookIndex = books.findIndex((user) => user.id === id);
    if (bookIndex === -1) res.status(404).json(`Book with id ${id} Not Found`);
    books.splice(bookIndex, 1);
    res.sendStatus(204);
  });

bookRouter.route('/:id/checkout/:userId').patch((req, res) => {
  const { id, userId } = req.params;
  const book = books.find((book) => book.id === id) as Book;
  const bookIndex = books.findIndex((book) => book.id === id);
  const updatedBook = { ...book, isCheckedOut: true } as Book;
  books.splice(bookIndex, 1, updatedBook);

  const user = users.find((user) => user.id === userId) as User;
  const userIndex = users.findIndex((user) => user.id === userId);
  user?.booksCheckedOut.push(book.id);
  users.splice(userIndex, 1, user);

  res.status(200).json(updatedBook);
});

bookRouter.route('/:id/checkin/:userId').patch((req, res) => {
  const { id, userId } = req.params;
  const book = books.find((book) => book.id === id) as Book;
  const bookIndex = books.findIndex((book) => book.id === id);
  const updatedBook = { ...book, isCheckedOut: false } as Book;
  books.splice(bookIndex, 1, updatedBook);

  const user = users.find((user) => user.id === userId) as User;
  const userIndex = users.findIndex((user) => user.id === userId);
  const booksCheckedOut = user.booksCheckedOut.filter(
    (bookId) => bookId !== id
  );
  const updatedUser = { ...user, booksCheckedOut };
  users.splice(userIndex, 1, updatedUser);

  res.status(200).json(updatedBook);
});

import { nanoid } from 'nanoid';
import { User, Book } from '../types';

export const books: Book[] = [
  {
    id: 'N9TTF',
    name: 'The Hunger Games',
    pages: 500,
    isCheckedOut: true,
  },
  {
    id: 'AnUc9',
    name: 'The Great Gatsby',
    pages: 1200,
    isCheckedOut: true,
  },
  {
    id: 'cWR2q',
    name: 'War and Peace',
    pages: 800,
    isCheckedOut: false,
  },
  {
    id: 'c11xT',
    name: 'Hamlet',
    pages: 2200,
    isCheckedOut: false,
  },
];

export const users: User[] = [
  {
    id: nanoid(5),
    name: 'Jalen',
    address: '347 Sumner Lane',
    booksCheckedOut: [books[0].id, books[1].id],
  },
  {
    id: nanoid(5),
    name: 'Kerry',
    address: '347 Sumner Lane',
    booksCheckedOut: [],
  },
  {
    id: nanoid(5),
    name: 'Mitch',
    address: '347 Sumner Lane',
    booksCheckedOut: [],
  },
  {
    id: nanoid(5),
    name: 'Sarah',
    address: '347 Sumner Lane',
    booksCheckedOut: [],
  },
];

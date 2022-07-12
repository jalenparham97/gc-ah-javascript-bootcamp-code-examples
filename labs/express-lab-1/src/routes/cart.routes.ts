import express from 'express';
import { nanoid } from 'nanoid';
import { cartItems } from '../data/cart.data';
import { CartItem } from '../types/cart.types';

export const cartRouter = express.Router();

cartRouter
  .route('/')
  .get((req, res) => {
    // Destructuring the properties from the query string object.
    const { maxPrice, prefix, pageSize } = req.query;
    let allCartItems = cartItems;
    // Checking if we have a maxPrice query string value.
    if (maxPrice) {
      // If we do then setting allCartItems equal to the array returned from the filter method when getting items that are less than or equal to the maxPrice.
      allCartItems = allCartItems.filter(
        (item) => item.price <= Number(maxPrice)
      );
    }
    // Checking if we have a prefix query string value.
    if (prefix) {
      // If we do then setting allCartItems equal to the array returned from the filter method when getting items where the product starts with the prefix string.
      allCartItems = allCartItems.filter((item) =>
        item.product.startsWith(prefix as string)
      );
    }
    // Checking if we have a pageSize query string value.
    if (pageSize) {
      // If we do then setting allCartItems equal to the array returned from the slice method when setting the end index equal to value of the pageSize.
      allCartItems = allCartItems.slice(0, Number(pageSize));
    }
    res.status(200).json(allCartItems);
  })
  .post((req, res) => {
    const newItem: CartItem = { id: nanoid(5), ...req.body };
    cartItems.push(newItem);
    res.status(201).json(newItem);
  });

cartRouter
  .route('/:id')
  .get((req, res) => {
    const cartItem = cartItems.find((item) => item.id === req.params.id);
    if (!cartItem) res.status(404).json('ID Not Found');
    res.status(200).json(cartItem);
  })
  .patch((req, res) => {
    const cartItem = cartItems.find(
      (item) => item.id === req.params.id
    ) as CartItem;
    const itemIndex = cartItems.findIndex((item) => item.id === req.params.id);
    const updatedCartItem: CartItem = { ...cartItem, ...req.body };
    cartItems.splice(itemIndex, 1, updatedCartItem);
    res.status(200).json(updatedCartItem);
  })
  .delete((req, res) => {
    const itemIndex = cartItems.findIndex((item) => item.id === req.params.id);
    cartItems.splice(itemIndex, 1);
    res.sendStatus(204);
  });

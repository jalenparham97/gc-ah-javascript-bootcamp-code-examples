import express from 'express';

// Set up the router for our greeting routes
export const greetingRouter = express.Router();

// This router is relative to the routes in the index.ts file.

greetingRouter.get('/', (req, res) => {
  console.log(req.query);
  const { age, name } = req.query;
  res.json(`Hi ${name}, I am ${age} year old.`);
});

greetingRouter.get('/hi', (req, res) => {
  res.json('Hi from Jalen');
});

// When we want to create or update data we send a post request with the data to create or update on the body of the request.
greetingRouter.post('/', (req, res) => {
  console.log(req.body);
  res.json(req.body);
});

// Adding a :{param} to the path will set it to a property on the requests params object.
// /greeting/:name
greetingRouter.get('/:name/:age', (req, res) => {
  console.log(req.params);
  const { age, name } = req.params;
  res.json(`Hi nice to meet you, ${name}, I am ${age} year old.`);
});

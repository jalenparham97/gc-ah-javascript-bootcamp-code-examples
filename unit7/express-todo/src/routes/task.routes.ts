import express from 'express';
import { v4 as uuidv4 } from 'uuid';
import { tasks } from '../data/tasks';
import { Task } from '../types/task.types';

export const taskRouter = express.Router();

taskRouter.get('/', (req, res) => {
  res.json(tasks);
});

taskRouter.get('/:id', (req, res) => {
  const task = tasks.find((taskObject) => taskObject.id === req.params.id);
  res.json(task);
});

taskRouter.post('/', (req, res) => {
  const newTask: Task = { id: uuidv4(), ...req.body };
  tasks.push(newTask);
  res.json(newTask);
});

taskRouter.patch('/:id', (req, res) => {
  const task = tasks.find(
    (taskObject) => taskObject.id === req.params.id
  ) as Task;
  const taskIndex = tasks.findIndex((task) => task.id === req.params.id);

  // Create a new updatedTask object with the merged properties from the task object and the req.body object.
  const updatedTask = { ...task, ...req.body };

  tasks.splice(taskIndex, 1, updatedTask);

  res.json(updatedTask);
});

taskRouter.delete('/:id', (req, res) => {
  const taskIndex = tasks.findIndex((task) => task.id === req.params.id);
  tasks.splice(taskIndex, 1);
  res.json({ message: 'task deleted' });
});

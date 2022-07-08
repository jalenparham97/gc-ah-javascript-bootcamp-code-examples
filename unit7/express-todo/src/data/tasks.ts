import { v4 as uuidv4 } from 'uuid';
import { Task } from '../types/task.types';

export let tasks: Task[] = [
  { id: uuidv4(), content: 'Take the trash out', isCompleted: false },
  { id: uuidv4(), content: 'Clean the kitchen', isCompleted: true },
  { id: uuidv4(), content: 'Work on my app', isCompleted: false },
];

import express from 'express';
import cors from 'cors';

import { taskRouter } from './routes/task.routes';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/tasks', taskRouter);

const port = 3000;
app.listen(port, () => console.log(`Listening on: http://localhost:${port}`));

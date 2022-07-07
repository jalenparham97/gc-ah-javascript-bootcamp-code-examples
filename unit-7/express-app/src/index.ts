import express, { Request, Response } from 'express';

// Import the cors module
import cors from 'cors';

// Create an instance of an express server
const app = express();

// Enable Cross Origin Resource Sharing so this API can be used from the web-apps on other domains
app.use(cors());

// Allow POST, PUT, and PATCH requests to use JSON bodies
app.use(express.json());

app.get('/', (request: Request, response: Response) => {
  response.json('Hello World!');
});

app.get('/greeting', (req, res) => {
  res.json({ greeting: 'Hello, Nice to meet you!' });
});

// Define a port
const port = 3000;

// Start the server
app.listen(port, () => {
  console.log(`Listening on: http://localhost:${port}`);
});

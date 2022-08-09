import axios from 'axios';
import { Quote } from '../types/quotes.types';

export async function getQuotes() {
  const url = 'https://grandcircusco.github.io/demo-apis/quotes.json';
  const response = await axios.get<Quote[]>(url);
  return response.data;
}

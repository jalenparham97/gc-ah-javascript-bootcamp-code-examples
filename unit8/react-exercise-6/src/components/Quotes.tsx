import { useEffect, useState } from 'react';
import { getQuotes } from '../services/quotes.service';
import { Quote } from '../types/quotes.types';

export default function Quotes() {
  const [quotes, setQuotes] = useState<Quote[]>([]);

  useEffect(() => {
    getQuotes().then((quotes) => setQuotes(quotes));
  }, []);

  return (
    <div>
      <h1>Quotes</h1>
      <ul>
        {quotes?.map((quote) => (
          <li>
            <p>Author: {quote.author}</p>
            <p>Quote: {quote.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

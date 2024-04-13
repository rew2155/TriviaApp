import React, { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '../public/vite.svg';
import './styles/App.css';

const bookData = {
  "fiction": [
    {"title": "The Great Gatsby", "author": "F. Scott Fitzgerald", "price": 10.00},
    {"title": "1984", "author": "George Orwell", "price": 8.50},
    {"title": "The Catcher in the Rye", "author": "J.D. Salinger", "price": 9.80}
  ],
  "non-fiction": [
    {"title": "Sapiens: A Brief History of Humankind", "author": "Yuval Noah Harari", "price": 15.00},
    {"title": "In Cold Blood", "author": "Truman Capote", "price": 12.00},
    {"title": "The Diary of a Young Girl", "author": "Anne Frank", "price": 7.00}
  ],
  "children": [
    {"title": "Charlotte's Web", "author": "E.B. White", "price": 5.00},
    {"title": "The Gruffalo", "author": "Julia Donaldson", "price": 6.00},
    {"title": "Where the Wild Things Are", "author": "Maurice Sendak", "price": 8.00}
  ]
};

function App() {
  const [selectedGenre, setSelectedGenre] = useState('fiction');
  const [basket, setBasket] = useState([]);

  const handleGenreChange = (genre) => {
    setSelectedGenre(genre);
  };

  const addToBasket = (book) => {
    setBasket([...basket, book]);
  };

  const removeFromBasket = (index) => {
    const newBasket = [...basket];
    newBasket.splice(index, 1);
    setBasket(newBasket);
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="genre-buttons">
        <button onClick={() => handleGenreChange('fiction')}>Fiction</button>
        <button onClick={() => handleGenreChange('non-fiction')}>Non-Fiction</button>
        <button onClick={() => handleGenreChange('children')}>Children</button>
      </div>
      <div className="books">
        {bookData[selectedGenre].map((book, index) => (
          <div key={index} className="book">
            <h3>{book.title}</h3>
            <p>Author: {book.author}</p>
            <p>Price: ${book.price.toFixed(2)}</p>
            <button onClick={() => addToBasket(book)}>Add to Basket</button>
          </div>
        ))}
      </div>
      <div className="basket">
        <h2>Basket</h2>
        <ul>
          {basket.map((item, index) => (
            <li key={index}>
              {item.title} - ${item.price.toFixed(2)}
              <button onClick={() => removeFromBasket(index)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;

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
  const [selectedGenre, setSelectedGenre] = useState('fiction'); //setting the state of the Selectedgenre to fiction
  const [basket, setBasket] = useState([]); //setting the state of the basket to empty

  const handleGenreChange = (genre) => {
    setSelectedGenre(genre);
  };

  /*...operator crewates a new array containing all the existing items in the 
  basket along with the new book being added
  so when set basket it called with the new array it will remake the basket with
  all the new elements*/
  const addToBasket = (book) => {
    setBasket([...basket, book]);
  };

  /* essentially removing a specific item from the basket using the index*/
  const removeFromBasket = (index) => {
    const newBasket = [...basket];
    newBasket.splice(index, 1);
    setBasket(newBasket);
  };

  //we only return the books for the selected genre
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
        <h2><img src="data:image/jpeg;base64,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" width = "50px"></img>
        Basket</h2>
        <ul>
          {basket.map((item, index) => (
            <li key={index}>
              {item.title} - ${item.price}
              <button onClick={() => removeFromBasket(index)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;

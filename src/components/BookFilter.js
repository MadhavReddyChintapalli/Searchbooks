import React, { useContext, useState } from 'react';
import BookContext from '../context/book/bookContext';

const BookFilter = () => {
  const bookContext = useContext(BookContext);

  const [text, setText] = useState('');

  const {
    searchBooks,
    sortBooksByTitle,
    sortBooksByPublishedYear,
    clearBooks,
    books,
  } = bookContext;

  const onChange = e => {
    setText(e.target.value);
  };
  const onSearch = e => {
    e.preventDefault();
    searchBooks(text);
  };
  const onSortByTitle = e => {
    e.preventDefault();
    sortBooksByTitle();
  };
  const onSortByYear = e => {
    e.preventDefault();
    sortBooksByPublishedYear();
  };
  const onClear = e => {
    e.preventDefault();
    clearBooks();
    setText('');
  };
  return (
    <div className='container'>
      <div className='form-wrap'>
        <h1>Search Books By Title</h1>
        <form>
          <div className='form-group'>
            <input
              type='text'
              placeholder='Filter Bookss...'
              onChange={onChange}
              className='form-control'
              value={text}
            />
          </div>
          <button className='btn' onClick={onSearch}>
            Search
          </button>
          <button className='btn' onClick={onSortByTitle}>
            Sort By Title
          </button>
          <button className='btn' onClick={onSortByYear}>
            Sort By Year
          </button>
          <button className='btn' onClick={onClear}>
            Clear
          </button>
        </form>
      </div>

      {books &&
        books.map((book, i) => (
          <div className='card' key={i}>
            <p className='lead'>Title: {book.title}</p>
            <p>Book Cover: {book.cover_i}</p>
            <p>Authors: {book.author_name}</p>
            <p>Publish Dates: {book.publish_date}</p>
            <p>First Publish Year: {book.first_publish_year}</p>
          </div>
        ))}
    </div>
  );
};

export default BookFilter;

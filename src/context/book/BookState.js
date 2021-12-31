import React, { useReducer } from 'react';
import axios from 'axios';
import BookContext from './bookContext';
import bookReducer from './bookReducer';
import {
  SEARCH_BOOKS,
  CLEAR_BOOKS,
  SORT_BOOKS_BY_TITLE,
  BOOK_ERROR,
  SORT_BOOKS_BY_PUBLISHED_YEAR,
} from '../types';

const BookState = props => {
  const initialState = {
    books: [],
    error: null,
  };

  const [state, dispatch] = useReducer(bookReducer, initialState);

  // Search Books
  const searchBooks = async text => {
    try {
      const res = await axios.get(
        `http://openlibrary.org/search.json?title=${text}`
      );

      dispatch({
        type: SEARCH_BOOKS,
        payload: res.data.docs,
      });
    } catch (err) {
      dispatch({
        type: BOOK_ERROR,
        payload: err.response.msg,
      });
    }
  };
  //Sort Books By Title
  const sortBooksByTitle = () => {
    dispatch({ type: SORT_BOOKS_BY_TITLE });
  };

  //Sort Books by Published Year
  const sortBooksByPublishedYear = () => {
    dispatch({ type: SORT_BOOKS_BY_PUBLISHED_YEAR });
  };

  // Clear Books
  const clearBooks = () => {
    dispatch({ type: CLEAR_BOOKS });
  };

  return (
    <BookContext.Provider
      value={{
        books: state.books,
        error: state.error,
        searchBooks,
        clearBooks,
        sortBooksByTitle,
        sortBooksByPublishedYear,
      }}
    >
      {props.children}
    </BookContext.Provider>
  );
};

export default BookState;

import {
  SEARCH_BOOKS,
  CLEAR_BOOKS,
  BOOK_ERROR,
  SORT_BOOKS_BY_TITLE,
  SORT_BOOKS_BY_PUBLISHED_YEAR,
} from '../types';

const bookReducer = (state, action) => {
  switch (action.type) {
    case SEARCH_BOOKS:
      return {
        ...state,
        books: action.payload,
      };
    case CLEAR_BOOKS:
      return {
        ...state,
        books: null,
        error: null,
      };
    case SORT_BOOKS_BY_TITLE:
      return {
        ...state,
        books: state.books.sort((a, b) => {
          if (a.title.toLowerCase() > b.title.toLowerCase()) return 1;
          if (a.title.toLowerCase() < b.title.toLowerCase()) return -1;
          return 0;
        }),
      };
    case SORT_BOOKS_BY_PUBLISHED_YEAR:
      return {
        ...state,
        books: state.books.sort((a, b) => {
          if (a.first_publish_year > b.first_publish_year) return -1;
          if (a.first_publish_year < b.first_publish_year) return 1;
          return 0;
        }),
      };
    case BOOK_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default bookReducer;

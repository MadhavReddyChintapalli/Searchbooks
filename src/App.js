import './App.css';
import BookState from './context/book/BookState';
import BookFilter from './components/BookFilter';
import { Fragment } from 'react';

function App() {
  return (
    <BookState>
      <Fragment>
        <BookFilter />
      </Fragment>
    </BookState>
  );
}

export default App;

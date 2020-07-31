import React from 'react';
import Search from './searchForm';
import MovieList from './movieList';
import Container from 'react-bootstrap/Container';

function App() {
  return (
    <Container>
      <Search />
      <MovieList />
    </Container>
  );
}

export default App;

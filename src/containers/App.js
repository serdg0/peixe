import React from 'react';
import Search from './searchForm';
import MovieList from './movieList';
import Container from 'react-bootstrap/Container';
import Favorites from './favorites';

function App() {
  return (
    <Container>
      <Search />
      <MovieList />
      <Favorites />
    </Container>
  );
}

export default App;

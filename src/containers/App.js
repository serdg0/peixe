import React from 'react';
import Container from 'react-bootstrap/Container';
import Search from './searchForm';
import MovieList from './movieList';
import Favorites from './favorites';

function App() {
  localStorage.getItem('favoritas') || localStorage.setItem('favoritas', '[]');
  return (
    <Container>
      <Search />
      <MovieList />
      <Favorites />
    </Container>
  );
}

export default App;

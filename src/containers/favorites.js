import React from 'react';
import {
  Card, ListGroup, ListGroupItem, Row, Col, Button,
} from 'react-bootstrap';

const Favorites = () => {
  const favoritasStr = localStorage.getItem('favoritas');
  const favoritasArr = JSON.parse(favoritasStr);
  const removeLs = () => localStorage.removeItem('favoritas');
  return (
    <div>
      <h1>Favoritos</h1>
      <Button variant="danger" onClick={removeLs}>Borrar Favoritos</Button>
      <Row>
        {favoritasArr.map(peli => (
          <Col sm={12} md={6} lg={4}>
            <Card key={peli.Title}>
              <Card.Img variant="top" src={peli.Poster} />
              <Card.Body>
                <Card.Title>{peli.Title}</Card.Title>
                <ListGroup className="list-group-flush">
                  <ListGroupItem>
                    Director:
                    {peli.Director}
                  </ListGroupItem>
                  <ListGroupItem>
                    Actores:
                    {peli.Actors}
                  </ListGroupItem>
                  <ListGroupItem>
                    Premios:
                    {peli.Awards}
                  </ListGroupItem>
                  <ListGroupItem>
                    Lanzamiento:
                    {peli.Released}
                  </ListGroupItem>
                  <ListGroupItem>
                    Rating IMDB:
                    {peli.imdbRating}
                  </ListGroupItem>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

    </div>
  );
};

export default Favorites;

import React, { useState, useEffect } from 'react';
import { Modal, Card, Button } from 'react-bootstrap';
import axios from 'axios';

const MovieModal = props => {
  const { title, poster } = props;
  const [info, setInfo] = useState({});
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const saveFavorite = () => {
    const storage = localStorage.getItem('favoritas');
    const array = JSON.parse(storage);
    array.push(info);
    localStorage.setItem('favoritas', JSON.stringify(array));
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const url = `https://www.omdbapi.com/?t=${title}&apikey=${process.env.REACT_APP_API_KEY}`;
    axios.get(url)
      .then(response => {
        setInfo(response.data);
      });
  }, [info]);
  return (
    <>
      <Button variant="info" onClick={handleShow}>
        Ver mas
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Card>
            <Card.Img variant="top" src={poster} />
            <Card.Body>
              <Card.Text>
                <ul>
                  <li>
                    Titulo:
                    {title}
                  </li>
                  <li>
                    Director:
                    {info.Director}
                  </li>
                  <li>
                    Premios:
                    {info.Awards}
                  </li>
                  <li>
                    Género:
                    {info.Genre}
                  </li>
                  <li>
                    Lanzamiento:
                    {info.Released}
                  </li>
                  <li>
                    Trama:
                    {info.Plot}
                  </li>
                  <li>
                    Rating en IMDB:
                    {info.imdbRating}
                  </li>
                  <li>
                    Duración:
                    {info.Runtime}
                  </li>
                  <li>
                    Clasificación:
                    {info.Rated}
                  </li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="primary" onClick={saveFavorite}>Agregue a Favoritos</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default MovieModal;

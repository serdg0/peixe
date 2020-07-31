import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { nameLogic } from '../logic/nameLogic';

const MovieModal = props => {
    const [show, setShow] = useState(false);
    const { movie: { Poster, Title, Type, Year, imdbID } } = props;
    const tipo = nameLogic(Type);
    const list = [Title, Year, tipo].map(x => <li>{x}</li>);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Button variant="info" onClick={handleShow}>
                Ver mas
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{Title}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Card>
                        <Card.Img variant="top" src={Poster} />
                        <Card.Body>
                            <Card.Text>
                                <ul>
                                    {list}
                                </ul>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="primary">Favoritos</Button>
                </Modal.Footer>
            </Modal>

        </>
    )
}

export default MovieModal;
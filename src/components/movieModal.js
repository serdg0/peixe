import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { showAction } from '../actions/index';
import { nameLogic } from '../logic/nameLogic';
import { useDispatch } from 'react-redux';

const MovieModal = props => {
    const [show, setShow] = useState(false);
    const showData = useSelector(state => state.show);

    const { movie: { Poster, Title, Type, Year, imdbID } } = props;
    const tipo = nameLogic(Type);
    const list = [Title, Year, tipo].map(x => <li>{x}</li>);
    const dispatch = useDispatch();
    const handleClose = () => setShow(false);
    const handleShow = () => {
        const url = `https://www.omdbapi.com/?t=${Title}&apikey=${process.env.REACT_APP_API_KEY}`;
        axios.get(url)
        .then(function (response) {
            dispatch(showAction(response.data));
        })
        .catch(function (error) {
            //setErrorMsg('No se ha encontrado la película con este titulo');
        });
        console.log(showData)
        setShow(true);
    }
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
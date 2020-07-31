import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { searchAction } from '../actions/index';


const Search = () => {
    const [query, setQuery] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const dispatch = useDispatch();

    const handleChange = event => {
        const { target: { value } } = event;
        setQuery(value);
    }

    const handleSearch = () => {
        const url = `https://www.omdbapi.com/?s=${query}&apikey=${process.env.REACT_APP_API_KEY}`;
        axios.get(url)
            .then(function (response) {
                setErrorMsg('');
                dispatch(searchAction(response.data.Search));
            })
            .catch(function (error) {
                setErrorMsg('No se ha encontrado la película con este titulo');
            });
    }

    return (
        <Form>
            <Form.Group controlId="formGroupSearch">
                <Form.Label><h1>Búsqueda</h1></Form.Label>
                <Form.Control type="search" placeholder="Ingrese el titulo de la película" onChange={handleChange} />
            </Form.Group>
            <Button variant="primary" type="button" onClick={handleSearch}>
                Buscar
            </Button>
            <p>{errorMsg}</p>
        </Form>
    )
}

export default Search;
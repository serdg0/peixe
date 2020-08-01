import React from 'react';
import { useSelector } from 'react-redux';
import Movie from '../components/movie';
import Table from 'react-bootstrap/Table';

const MovieList = () => {
    const movies = useSelector(state => state.movies);
    
    const list = movies.length === 0 ? 
    <td colSpan="4">Haga una búsqueda</td> :
    movies.map(movie => <Movie key={movie.Title} movie={movie} />);

    return (
        <Table responsive striped bordered hover>
            <thead>
                <tr>
                    <th>Titulo</th>
                    <th>Año</th>
                    <th>Tipo</th>
                    <th>Ver</th>
                </tr>
            </thead>
            <tbody>
                {list}
            </tbody>
        </Table>
    )
}

export default MovieList;
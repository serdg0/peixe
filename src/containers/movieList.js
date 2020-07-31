import React from 'react';
import { useSelector } from 'react-redux'
import Movie from '../components/movie';
import Table from 'react-bootstrap/Table';

const MovieList = () => {
    const movies = useSelector(state => state.movies);
    
    const list = movies.length === 0 ? 
    <td colSpan="3" className="justify-content-center">Haga una búsqueda</td> : 
    movies.map(movie => <Movie movie={movie} />);

    return (
        <Table responsive striped bordered hover>
            <thead>
                <tr>
                    <th>Titulo</th>
                    <th>Año</th>
                    <th>Tipo</th>
                </tr>
            </thead>
            <tbody>
                {list}
            </tbody>
        </Table>
    )
}

export default MovieList;
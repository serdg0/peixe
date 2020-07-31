import React from 'react';

const Movie = props => {
    const { movie: { Poster, Title, Type, Year, imdbID } } = props;
    const tipo = Type === 'movie' ? 'pelicula' : 'serie';
    const list = [Title, Year, tipo].map(x => <td>{x}</td>);
    return (
        <tr>
            {list}
        </tr>
    )
}

export default Movie;
import React from 'react';
import MovieModal from "./movieModal";
import { nameLogic } from '../logic/nameLogic';

const Movie = props => {
    const { movie: { Poster, Title, Type, Year, imdbID } } = props;
    const tipo = nameLogic(Type);
    const ver = <MovieModal title={Title} poster={Poster} />;
    const list = [Title, Year, tipo, ver].map(x => <td>{x}</td>);

    return (
        <tr key={imdbID}>
            {list}
        </tr>
    )
};

export default Movie;
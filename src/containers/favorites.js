import React from 'react';
import {useSelector} from 'react-redux';

const Favorites = () => {
    const favorites = useSelector(state => state.favorites);
    const list = favorites.map(fav => {
        const faveObject = JSON.parse(localStorage.getItem(fav));
        console.log(faveObject);
        return (
            <ul>
                <li>{faveObject.Title}</li>
                <li>{faveObject.Year}</li>
                <li>{faveObject.Director}</li>
                <li>{faveObject.Genre}</li>
            </ul>
        )
    });
    return (
        <div>
            <h1>Favoritos</h1>
            {list}
        </div>
    )
};

export default Favorites;
import React, { useState, useEffect, useMemo } from 'react';
import axios from "axios";

const url = 'https://raw.githubusercontent.com/prust/wikipedia-movie-data/master/movies.json';

function MovieList() {
    const [state, setState] = useState({
        'query': '',
        'year': 2018,
        'movieList': [],
        'yearList': [],
    });

    useEffect(() => {
        async function callApi() {
            const { data } = await axios.get(url);
            const yearList = Array.from(new Set(data.map(movie => movie.year)));
            setState({
                ...state,
                movieList: data,
                yearList
            });
        }
        callApi();
    }, []);

    const { yearList, query, year, movieList } = state;

    const thisMovieList = useMemo(() => {
        return movieList.filter(movie => {
            if ( query.length > 0 ) {
                return (movie.title.indexOf(query) > -1) && (movie.year === year);
            }
            return movie.year === year
        })
    }, [query, year, movieList]);

    return (
        <>
            <h2>함수형 Movie List</h2>
            {JSON.stringify(thisMovieList)}
        </>
    );
}

export default MovieList;

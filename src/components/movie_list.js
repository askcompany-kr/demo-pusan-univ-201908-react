import React, { Component } from 'react';
import axios from 'axios';


const url = 'https://raw.githubusercontent.com/prust/wikipedia-movie-data/master/movies.json';


class MovieList extends Component {
    state = {
        'query': '',
        'year': 2018,
        'movieList': [],
        'yearList': [],
    };

    async componentDidMount() {
        const { data } = await axios.get(url);
        const yearList = Array.from(new Set(data.map(movie => movie.year)));

        this.setState({
            movieList: data,
            yearList
        });
    }

    onQueryChange = (e) => {
        const query = e.target.value.trim();
        this.setState({ query });
    };

    onChange = (e) => {
        const year = parseInt(e.target.value);
        this.setState({ year });
    };

    render() {
        const { query, year, movieList, yearList } = this.state;

        const thisMovieList = movieList.filter(movie => {
            if ( query.length > 0 ) {
                return (movie.title.indexOf(query) > -1) && (movie.year === year);
            }
            return movie.year === year
        });
        const thisMovieListExist = thisMovieList.length > 0;

        return (
            <div>
                <h2>Movie List</h2>
                <input type="text" value={query} onChange={this.onQueryChange} />
                <select value={year} onChange={this.onChange}>
                    {yearList.map(year =>
                        <option key={year} value={year}>{year}</option>
                    )}
                </select>
                <table>
                    <thead>
                        <tr>
                            <th>title</th>
                            <th>year</th>
                            <th>cast</th>
                            <th>genres</th>
                        </tr>
                    </thead>
                    <tbody>
                        {!thisMovieListExist &&
                            <tr><td colSpan={4}>검색결과가 없습니다.</td></tr>
                        }
                        {thisMovieList.map(movie =>
                            <tr key={movie.title}>
                                <td>{movie.title}</td>
                                <td>{movie.year}</td>
                                <td>{movie.cast}</td>
                                <td>{movie.genres}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default MovieList;

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function API() {
    const [movies, setMovies] = useState([]);
    let holder = [];
    useEffect(() => {

        const options = {
            method: 'GET',
            url: 'https://alpha-vantage.p.rapidapi.com/query',
            params: {
                interval: '5min',
                function: 'TIME_SERIES_INTRADAY',
                symbol: 'MSFT',
                datatype: 'json',
                output_size: 'compact'
            },
            headers: {
                'X-RapidAPI-Key': '729205b4eemshe899086cf8178f6p1b1795jsnb8e00859b6b5',
                'X-RapidAPI-Host': 'alpha-vantage.p.rapidapi.com'
            }
        };
        axios.request(options).then(function (response) {
            console.log(response.data);
        }).catch(function (error) {
            console.error(error);
        });
    }, []);
    const card = movies.map(movie => (
        <div className="card col-md-3 m-5 p-auto" key={movie.id}>

            <div className="card-body">
                <img className='card-img-top' src={movie.image} alt="" />
                <h4 className="card-title text-truncate">{movie.title} - {movie.release_date}</h4>
                <h5 className="card-title">Rating: {movie.rt_score}% </h5>
                <p className="card-text desc text-truncate"> {movie.description}</p>
            </div>
        </div>


    ))

    return (
        <div className='row d-flex justify-content-center'>
            {card}
        </div>

    );
}

export default API;
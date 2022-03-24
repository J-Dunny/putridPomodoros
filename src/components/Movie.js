import React, { Component } from 'react'

const Movie = (props) => {
    console.log(props)
        return (
            <div className='movie-card'>
                <h3>{props.title}</h3>
                <img src={props.poster_path} />
                <img src={props.backgrop_path} />
                <p>{props.average_rating}</p>
            </div>
        )
    }


export default Movie

// {
//     "id": 694919,
//     "poster_path": "https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg",
//     "backdrop_path": "https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg",
//     "title": "Money Plane",
//     "average_rating": 6.666666666666667,
//     "release_date": "2020-09-29"
//   },
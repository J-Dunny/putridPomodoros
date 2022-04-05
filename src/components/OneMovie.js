import React, {Component} from 'react'
import '../OneMovie.css'
import { NavLink } from 'react-router-dom'

class OneMovie extends Component {
    constructor(props){
        super(props)
    }
    
    
    componentDidMount = () =>{
        this.props.fetchOneMovie(this.props.fetchId)
    }

    render(){

    if (this.props.oneMovie.id) {
        localStorage.setItem('refreshMovie', JSON.stringify(this.props.oneMovie))
    }

   let oneMovie = this.props.oneMovie.id ? this.props.oneMovie : JSON.parse(localStorage.getItem('refreshMovie'))

    let rating;
    
    if (oneMovie != null && oneMovie.average_rating > 6) {
        rating = <p className="p-tag">🍅 {Math.round(oneMovie.average_rating * 100) / 100}</p>;
    } else if (oneMovie != null && oneMovie.id) {
        rating = <p className="p-tag">🤮 {Math.round(oneMovie.average_rating * 100) / 100}</p>
    }

    const display = oneMovie != null ?

        <div className='container' style={{ backgroundImage: `url(${oneMovie.backdrop_path})` }} >
            <NavLink className='exit-button' to='/' style={{ textDecoration: 'none' }}><p className='exit-button' onClick={() => this.props.searchMovies('')}> ❌ </p></NavLink>
            <section>
                <div className='one-movie'>
                    <img className='one-movie-img' src={oneMovie.poster_path} />
                    <section className='one-movie-info'>
                        <p className="p-tag"> Released: {oneMovie.release_date}</p>
                        <p className="p-tag">{oneMovie.overview}</p>
                        <p className="p-tag">{oneMovie.runtime} mins</p>
                        {oneMovie.budget ? <p className="p-tag">Budget: ${oneMovie.budget}</p> : ""}
                        {oneMovie.revenue ? <p className="p-tag">Revenue: ${oneMovie.revenue}</p> : ""}
                        <div className='genres'>
                            {oneMovie.genres.map((genre, i) => {
                                return <p className="p-tag" key={genre}> {(i ? ', ' : '') + genre}</p>
                            })}
                        </div>
                        {rating}
                    </section>
                </div>
            </section>
        </div> : <h1>Loading Movie details....</h1>

    return display
}
}

export default OneMovie


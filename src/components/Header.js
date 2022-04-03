import React from 'react'
import '../Header.css'


function Header(props) {

    const handleChange = event => {
        event.preventDefault()
        const output = event.target.value.toLowerCase()
        props.searchMovies(output);

    }

    return (
        <header>
            <h1>Putrid Pomodoros</h1>
                <label name="search"></label>
                <input
                    name="search"
                    type='text'
                    placeholder='Search'
                    onChange={event => handleChange(event)}
                />
        </header>
    )
}



export default Header

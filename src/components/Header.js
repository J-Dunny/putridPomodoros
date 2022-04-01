import React, {Component} from 'react'
import '../Header.css'


class Header extends Component {
    constructor(props) {
        super(props)
        this.state= {
            search: ''
    }
  }



    handleChange = event => {
        const {name, value} = event.target
        this.setState({[name]: value});
        const output = this.state.search.toLowerCase()
        this.props.searchMovies(output);
      }
    // write function to search movies that includes the input value/ search state in app js passed in props to the header

    render() {
        return (
            <header>
                <h1>Putrid Pomodoros</h1>

                <div>
                <label name="search"></label>
                    <input
                        name="search"
                        type='text'
                        placeholder='Search'
                        value={this.state.search}
                        onChange={event => this.handleChange(event)}
                    />

                </div>
            </header>
        )
    }
}



export default Header

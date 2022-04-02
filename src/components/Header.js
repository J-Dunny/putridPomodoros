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
        const {value} = event.target
        this.setState({search: value});
      }





    render() {
        const output = this.state.search.toLowerCase()
        this.props.searchMovies(output);

        return (
            <header>
                <h1>Putrid Pomodoros</h1>

                <form>
                <label name="search"></label>
                    <input
                        name="search"
                        type='text'
                        placeholder='Search'
                        value={this.state.search}
                        onChange={event => this.handleChange(event)}
                    />

                </form>
            </header>
        )
    }
}



export default Header

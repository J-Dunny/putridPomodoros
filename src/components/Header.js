import React, {Component} from 'react'
import '../Header.css'


class Header extends Component {
    constructor(){
        super()
        //this.state= {
            // search: ''
    // }
            
        }
    
    // handleChange = event => {
    //     this.setState({[event.target.name]: event.target.value})
    //     }
    // write function to search movies that includes the input value/ search state in app js passed in props to the header

    render() {
        return (
            <header>
                <h1>Putrid Pomodoros</h1>

                <div>
                <label name="search">Search</label>
                    <input 
                        name="search"
                        type='text'
                        placeholder='Search'
                        // value={this.state.title}
                        // onChange={event => this.handleChange(event)}
                    />
                    
                </div>
            </header>
        )
    }
}
    


export default Header
import React, {Component} from 'react'
import '../Header.css'


class Header extends Component {
    constructor(){
        super()
        //this.state= {input value
            
        }
    
    render() {
        return (
            <header>
                <h1>Putrid Pomodoros</h1>

                <div>
                <label name="search">Search</label>
                    <input 
                        name="search"
                        type='text'
                    />
                    
                </div>
            </header>
        )
    }
}
    


export default Header
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

// class Header extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             search: ''
//         }
//     }

    // handleChange = event => {
    //     event.preventDefault()
    //     this.setState({ search: event.target.value });
        
    //     const output = this.state.search.toLowerCase()
    //     this.props.searchMovies(output);

    //     console.log(output)
    //     console.log(this.state.search)
    // }


//     render() {

//         // console.log("render",output)
//         // console.log("render",this.state.search)
          

//         return (
//             <header>
//                 <h1>Putrid Pomodoros</h1>

//                 <form>
//                     <label name="search"></label>
//                     <input
//                         name="search"
//                         type='text'
//                         placeholder='Search'
//                         value={this.state.search}
//                         onChange={event => this.handleChange(event)}
//                     />

//                 </form>
//             </header>
//         )
//     }
// }


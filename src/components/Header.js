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
//         // I think we can remove state all together and make this a funcitonal component since they say we need "controlled forms when submiting" but this isnt really a forma and we arent submitting anything in
//         this.state = {
//             search: ''
//         }
//     }

//     handleChange = event => {
//         event.preventDefault()
//         this.setState({ search: event.target.value });
//         //remove above line if removing state
//         const output = event.target.value.toLowerCase()
//         this.props.searchMovies(output);

//         console.log(output)
//         console.log(this.state.search)
//     }


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
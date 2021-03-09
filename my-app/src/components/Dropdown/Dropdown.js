import React, { Component } from "react";
import './Dropdown.css'

// class Dropdown extends Component {
//     // state = {
//     //     click: false
//     // }
//     // handleClick = () => {
//     //     const { click } = this.state
//     //     this.setState({ click: !click })
//     // }
//     render() {
//         // const { click } = this.state
//         return (
//             <div>

//             </div>
//         )
//     }
// }

const Dropdown = ({clicked}) => {
    return(
        <div className="dropdown-div">
            <label className="dropdown-label">
                <select onChange={clicked} className="dropdwon-select">
                    <option value="dropdown">Dropdown</option>
                    <option value="covid19">Covid19</option>
                    <option value="politics">Politics</option>
                </select>
            </label>
        </div>
    )
}

export default Dropdown
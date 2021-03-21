import React from 'react'
import { Link } from 'react-router-dom'

class Navbar extends React.Component {
    render () {
        return (
           <>
           <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{height:"50px"}}>
            <Link to="/">
            <i class="fa fa-home" style={{fontSize:"25px"}}> Home</i>
            </Link>
            <div className="collapse navbar-collapse mr-auto" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                </ul>
                <Link to="/addevent">
                <i class="fa fa-plus" style={{fontSize:"25px"}}> Event</i>
                </Link>
                <Link to="/dashboard">
                <i class="fa fa-dashboard" style={{fontSize:"25px", marginLeft: "20px"}}> Dashboard</i>
                </Link>
            </div>
            </nav>
           </>
        )
    }
}

export default Navbar



import React from 'react';
import {NavLink} from 'react-router-dom'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-success ">
            <div className="container">
                <NavLink className="navbar-brand text-light text-bold"  to="/">React Router</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <NavLink className="nav-link text-warning" exact to="/"><i class="fa fa-home fa-2x"></i> <span className="sr-only">(current)</span></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-warning" exact to="/about"><i class="fa fa-address-card fa-2x"></i></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-warning" exact to="/contact"><i class="fa fa-address-book fa-2x"></i></NavLink>
                        </li>
                       
                    </ul>
                    
                </div>
                <Link className="btn btn-outline-light " to="/users/add"><i class="fa fa-user-plus fa-2x"></i></Link>
            </div>
        </nav>
    )
}

export default Navbar;
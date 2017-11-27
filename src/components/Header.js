import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <div className="row no-gutters">
                <div className="col-md-2 logo">Offices</div>
                <div className="col-md-10">
                    <ul className="nav justify-content-center">
                        <li className="nav-item">
                            <Link to='/' className="nav-link active" href="#">List</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/grid' className="nav-link" href="#">Grid</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/map' className="nav-link" href="#">Map</Link>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Header;
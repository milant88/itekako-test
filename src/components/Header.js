import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className="row no-gutters">
                <div className="col-md-2 logo">Offices</div>
                <div className="col-md-10">
                    <ul className="nav justify-content-center">
                        <li className="nav-item">
                            <a className="nav-link active" href="#">List</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Grid</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Map</a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Header;
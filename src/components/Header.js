import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            active: 'List'
        }
    }

    render() {
        return (
            <div className="row no-gutters">
                <div className="col-md-2 logo">Offices</div>
                <div className="col-md-10">
                    <ul className="nav justify-content-center">
                        <li className="nav-item">
                            {this._renderLink('List', '/')}
                        </li>
                        <li className="nav-item">
                            {this._renderLink('Grid', '/grid')}
                        </li>
                        <li className="nav-item">
                            {this._renderLink('Map', '/map')}
                        </li>
                    </ul>
                </div>s
            </div>
        )
    }

    _setActiveLink = (event) => {
        console.log(event.target.id);
        this.setState({
            active: event.target.id
        })

    };

    _renderLink = (value, route) => {
        if(this.state.active === value) {
            return <Link id={value} to={route} onClick={this._setActiveLink} className="nav-link active" href="#">{value}</Link>
        } else {
            return   <Link id={value} to={route} onClick={this._setActiveLink} className="nav-link" href="#">{value}</Link>
        }
    };
}

export default Header;
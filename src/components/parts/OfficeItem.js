import React, { Component } from 'react';

class OfficeItem extends Component {

    render() {
        return (
            <div className="item">
                {this.props.photo ? <img src={this.props.photo} alt='*'/> : <div className="item__placeholder">{this.props.name[0]}</div>}
                <div className="item__wrapper">
                    <div className="item__name">{this.props.name}</div>
                    <div className="item__description">{this.props.description}</div>
                </div>
            </div>
        )
    }
}

export default OfficeItem;
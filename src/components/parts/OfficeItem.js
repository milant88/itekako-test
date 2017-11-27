import React, { Component } from 'react';

class OfficeItem extends Component {

    render() {
        return (
            <div className="office-item">
                <img src={this.props.photo} alt='*'/>
                <span>{this.props.name}</span>
                <span>{this.props.description}</span>
            </div>
        )
    }
}

export default OfficeItem;
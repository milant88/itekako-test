import React, { Component } from 'react';
import OfficeItem from '../parts/OfficeItem';

class Grid extends Component {
    render() {
        return (
            <div className="container">
                <div className="row office-grid">
                    {
                        this.props.office.map(office =>
                            <div key={office.id} className="col-lg-3 col-md-6 col-sm-6">
                                <OfficeItem
                                    name={office.name}
                                    description={this._truncate(office.description)}
                                    photo={office.photo}
                                />
                            </div>
                        )
                    }
                </div>
            </div>
        )
    }

    _truncate = (string) => {
        if (string.length > 100)
            return string.substring(0,100)+'...';
        else
            return string;
    };
}

export default Grid;
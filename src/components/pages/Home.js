import React, { Component } from 'react';
import OfficeItem from "../parts/OfficeItem";

class Home extends Component {

    render() {
        return (
            <div className="container">
                <div className="row office-list">
                    <div className="col-md-12">
                        {
                            this.props.office.map(office =>
                                <OfficeItem
                                    key={office.id}
                                    name={office.name}
                                    description={this._truncate(office.description)}
                                    photo={office.photo}
                                />
                            )
                        }
                    </div>
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

export default Home;
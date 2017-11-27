import React, { Component } from 'react';
import OfficeItem from "../parts/OfficeItem";

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            offices: null
        }
    }

    render() {
        return (
            <div className="container">
                <div className="row office-list">
                    {
                        this.props.office.map(office =>
                            <OfficeItem
                                key={office.id}
                                name={office.name}
                                description={office.description}
                                photo={office.photo}
                            />
                        )
                    }
                    {console.log(this.props.office)}
                </div>
            </div>
        )
    }
}

export default Home;
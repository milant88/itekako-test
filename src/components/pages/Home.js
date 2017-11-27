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
            <div className="row no-gutters">
                {
                    this.props.office.map(office =>
                        <OfficeItem
                            key={office.id}
                            name={office.name}
                            description={office.description}
                            image={office.photo}
                        />
                    )
                }
                {console.log(this.props.office)}
            </div>
        )
    }
}

export default Home;
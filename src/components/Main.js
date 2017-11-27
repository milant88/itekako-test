import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import axios from 'axios';
import Home from './pages/Home';
import Grid from './pages/Grid';
import Map from './pages/Map';
import Loading from './parts/Loading';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            offices: null,
            isLoading: true
        }
    }

    componentWillMount() {
        this._initializeOffices();
    }

    render() {
        return (
            this._renderContent()
        )
    }

    _renderContent = () => {
        if(this.state.isLoading) {
            return <Loading />
        } else {
            return (
                <main className="row">
                    <Switch>
                        <Route exact path='/' render={(props) => ( <Home office={this.state.offices}/> )} />
                        <Route exact path='/grid' render={(props) => ( <Grid office={this.state.offices}/> )} />
                        <Route exact path='/map' render={(props) => ( <Map office={this.state.offices}/> )} />
                    </Switch>
                </main>
            )
        }
    };

    _initializeOffices = () => {
        axios.get(`https://itk-exam-api.herokuapp.com/api/offices`).then(result => {
            this.setState({
                offices: result.data,
                isLoading: false
            });

        }).catch(error => {
            this.setState({
               isLoading: false
            });
            alert('Error fetching and parsing data', error);
        });
    }
}

export default Main;
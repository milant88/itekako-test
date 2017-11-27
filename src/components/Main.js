import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Grid from './pages/Grid';
import Map from './pages/Map';

class Main extends Component {
    render() {
        return (
            <main className="row">
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/grid' component={Grid} />
                    <Route path='/map' component={Map} />
                </Switch>
            </main>
        )
    }
}

export default Main;
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import NSlit from './NSlit/NSlit';

export default class Content extends Component {
    render () {
        return (
            <Switch>
                <Route exact path="/" component = {Home}/>
                <Route path="/nslit" component = {NSlit}/>
            </Switch>
        )
    }
};

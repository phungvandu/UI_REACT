import React from 'react';
import { Route, Switch } from "react-router-dom";
import login from '../login/login';
import registration from '../registration/registration';

export default function routercontrol() {
    return (
        <Switch>
            <Route exact path="/dangky" component={registration} />
            <Route exact path="/dangnhap" component={login} />
            <Route exact path="" component={login} />
        </Switch>
    )
}

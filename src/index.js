/*
import React from 'react';
import ReactDOM from 'react-dom';


import App from './App';


ReactDOM.render(<App/>, document.getElementById('root'));

*/

import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import "./asset/css/bootstrap.css";
import "./asset/css/dashboard/animate.min.css";
import "./asset/sass/light-bootstrap-dashboard.css?v=1.2.0";
import "./asset/css/dashboard/demo.css";
import "./asset/css/dashboard/pe-icon-7-stroke.css";
import Dashboard from "./layouts/Dashboard";
import Home from "./views/Home";
import Posts from "./views/Posts";
import TableList from "./views/TableList";
import UserProfile from "./views/UserProfile";

/*import { HashRouter, Route, Switch } from "react-router-dom";*/

/*import indexRoutes from "./routes/index";*/

/*
ReactDOM.render(
    <HashRouter>
        <Switch>
            {indexRoutes.map((prop, key) => {
                return <Route to={prop.path} component={prop.component} key={key} />;
            })}
        </Switch>
    </HashRouter>,
    document.getElementById("root")
);*/


ReactDOM.render(
    <Router>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/posts" component={Posts}/>
            <Route path="/mypage" component={TableList}/>
            <Route path="/dashboard" component={Dashboard}/>
            <Route path="/user" component={UserProfile}/>
        </Switch>
    </Router>
    , document.getElementById('root'));
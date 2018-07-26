import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import "./asset/css/bootstrap.css";
import "./asset/css/dashboard/animate.min.css";
import './asset/sass/light-bootstrap-dashboard.css?v=1.2.0';

import "./asset/css/dashboard/demo.css";
import "./asset/css/dashboard/pe-icon-7-stroke.css";


import Dashboard from "./layouts/Dashboard";
import Home from "./views/Home";
import UserProfile from "./views/UserProfile";
import TableList from "./views/TableList";

ReactDOM.render(
    <Router>
        <Switch>
            <Route exact path="/" component={Home}/>

            <Route path="/mypage" component={Dashboard}/>

            <Route path="/user" component={UserProfile}/>
            <Route path="/table" component={TableList}/>
        </Switch>
    </Router>
    , document.getElementById('root'));
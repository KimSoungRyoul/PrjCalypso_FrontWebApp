import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


import Home from './views/Home';

import TableList from "./views/TableList";
import Dashboard from "./layouts/Dashboard";
import UserProfile from "./views/UserProfile";


const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/mypage" component={TableList}/>
                <Route path="/dashboard" component={Dashboard}/>
                <Route path="/user" component={UserProfile}/>
            </Switch>
        </Router>
    );
};

export default App;
import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


import Home from './views/Home';
import Posts from "./views/Posts";
import MyPage from './views/MyPage'

const App = () => {
    return (
        <Router>
            <div>

                <div>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/posts" component={Posts}/>
                        <Route path="/mypage" component={MyPage}/>
                    </Switch>
                </div>
            </div>
        </Router>
    );
};

export default App;
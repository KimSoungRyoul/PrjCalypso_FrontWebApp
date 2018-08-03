import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import promise from "redux-promise";

import reducers from "./reducers";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import registerServiceWorker from "./registerServiceWorker";
import Index from "./components/Page/Index";
import LoginPage from "./components/Page/LoginPage";
import Signup from "./components/Page/Signup";
import PostPage from "./components/Page/PostPage";
import Header from "./components/Header/Header";
import NotFound from "./components/Page/NotFound";
import PostShow from "./components/Page/PostShow";
import Footer from "./components/Header/Footer";
import Dashboard from "./layouts/Dashboard";
import UserProfile from "./views/UserProfile";

import "./asset/css/dashboard/animate.min.css";
import "./asset/sass/light-bootstrap-dashboard.css?v=1.2.0";

import "./asset/css/dashboard/demo.css";
import "./asset/css/dashboard/pe-icon-7-stroke.css";
import "./asset/css/bootstrap.css";

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider
    store={createStoreWithMiddleware(
      reducers,
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )}
  >
    <Router>
      <Fragment>
        <Header />
        <Switch>
          <Route exact path="/" component={Index} />
          <Route exact path="/post" component={PostPage} />
          <Route exact path="/post/:id" component={PostShow} />
          <Route exact path="/Login" component={LoginPage} />
          <Route exact path="/signup" component={Signup} />
          <Route path="/mypage" component={Dashboard} />

          <Route path="/user" component={UserProfile} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </Fragment>
    </Router>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();

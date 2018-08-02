import { withRouter } from "react-router";
import React, { Component } from "react";
import { connect } from "react-redux";

import { NavLink } from "react-router-dom";
import "../../asset/css/Header.css";
import logo from "../../asset/images/logo2.png";

class Header extends Component {
  render() {
    const url = this.props.location.pathname;
    const { isLogin } = this.props;
    const navLogout = (
      <div className="container">
        <div className="login">
          <NavLink to="/login" className="navItem">
            Login
          </NavLink>
        </div>
        <div className="signup">
          <NavLink to="/signup" className="navItem">
            SignUp
          </NavLink>
        </div>
      </div>
    );

    const navLogin = (
      <div className="container">
        <div className="logout">
          <NavLink to="/Login" className="navItem">
            Logout
          </NavLink>
        </div>
      </div>
    );

    return (
      <div className="header">
        <div className="container">
          <div className="nav">
            <div className="container">
              <div className="left-nav">
                <div className="container">
                  <div className="brand">
                    <div className="logo">
                      <NavLink to="/" className="navItem">
                        <img src={logo} alt="logo" />
                      </NavLink>
                    </div>
                    <div className="brandName">
                      <NavLink to="/" className="navItem">
                        Givennes
                      </NavLink>
                    </div>
                  </div>
                  <div className="post">
                    <NavLink to="/post" className="navItem">
                      Post
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="right-nav">{isLogin ? navLogin : navLogout}</div>
            </div>
          </div>
          {url === "/" ? <div className="banner" /> : ""}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLogin: state.auth.isLogin
});

export default withRouter(connect(mapStateToProps)(Header));

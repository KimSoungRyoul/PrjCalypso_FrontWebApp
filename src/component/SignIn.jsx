import React, { Component } from "react";
import Login from "./Login";

class SignIn extends Component {
  render() {
    return (
      <div
        className="modal bnr-modal about-modal w3-agileits fade"
        id="myModal2"
        tabIndex="-1"
        role="dialog"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body login-page ">
              {/*로그인페이지*/}
              <div className="sap_tabs">
                <div
                  id="horizontalTab"
                  style={{ display: "block", width: "100%", margin: "0px;" }}
                >
                  <ul className="resp-tabs-list">
                    <li className="resp-tab-item" aria-controls="tab_item-0">
                      <span>Login</span>
                    </li>
                    <li className="resp-tab-item" aria-controls="tab_item-1">
                      <span>Register</span>
                    </li>
                  </ul>
                  <div className="clearfix" />
                  <div className="resp-tabs-container">
                    <div
                      className="tab-1 resp-tab-content"
                      aria-labelledby="tab_item-0"
                    >
                      <div className="agileits-login">
                        <form action="#" method="post">
                          <input
                            type="email"
                            className="email"
                            name="Email"
                            placeholder="Email"
                            required=""
                          />
                          <input
                            type="password"
                            className="password"
                            name="Password"
                            placeholder="Password"
                            required=""
                          />
                          <div className="wthree-text">
                            <ul>
                              <li>
                                <label className="anim">
                                  <input type="checkbox" className="checkbox" />
                                  <span> Remember me ?</span>
                                </label>
                              </li>
                              <li>
                                <a href="#">Forgot password?</a>
                              </li>
                            </ul>
                            <div className="clearfix" />
                          </div>
                          <div className="w3ls-submit">
                            <input type="submit" value="LOGIN" />
                          </div>
                        </form>
                      </div>
                    </div>
                    <div
                      className="tab-1 resp-tab-content"
                      aria-labelledby="tab_item-1"
                    >
                      <div className="login-top sign-top">
                        <div className="agileits-login">
                          <Login />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*//로그인페이지*/}
          </div>
        </div>
      </div>
    );
  }
}

export default SignIn;

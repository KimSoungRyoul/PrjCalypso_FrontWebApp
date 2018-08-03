import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { actionLogin } from "../../action";
import "../../asset/css/Login.css";

class LoginPage extends Component {
  renderID(field) {
    const {
      meta: { touched, error }
    } = field;
    return (
      <div className="form-group">
        <label>{field.label}</label>
        <input
          type="text"
          className="form-label"
          autoComplete="off"
          {...field.input}
        />
        <div className="text-help">{touched ? error : ""}</div>
      </div>
    );
  }

  renderPW(field) {
    const {
      meta: { touched, error }
    } = field;
    return (
      <div className="form-group">
        <label>{field.label}</label>
        <input
          type="password"
          className="form-label"
          autoComplete="off"
          {...field.input}
        />
        <div className="text-help">{touched ? error : ""}</div>
      </div>
    );
  }

  onSubmit = value => {
    this.props.actionLogin(value);
  };

  render() {
    const { handleSubmit } = this.props;

    return (
      <div className="Loginwrap">
        <div className="LoginArea">
          <div className="container">
            <div className="title">
              <span>로그인</span>
            </div>
            <div className="InputArea">
              <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field label="아이디" name="id" component={this.renderID} />
                <Field label="패스워드" name="pw" component={this.renderPW} />

                <div className="btnArea">
                  <button type="submit" className="signupBtn">
                    로그인
                  </button>
                  <button className="cancleLink">
                    <NavLink to="/" className="cancleLink">
                      Cancle
                    </NavLink>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function validate(values) {
  const error = {};

  if (!values.id) {
    error.id = "아이디를 입력하세요.";
  } else if (values.id.length < 5) {
    error.id = "아이디가 너무짧습니다.";
  }

  if (!values.pw) {
    error.pw = "비밀번호를 입력하세요";
  } else if (values.pw.length < 5) {
    error.pw = "비밀번호가 너무짧습니다.";
  }
  return error;
}

// const mapDispatchToProps =

export default reduxForm({
  validate,
  form: "Login"
})(
  connect(
    null,
    { actionLogin }
  )(LoginPage)
);

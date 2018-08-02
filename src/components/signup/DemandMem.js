import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { NavLink } from "react-router-dom";

class DemandMem extends Component {
  renderField(field) {
    const {
      meta: { touched, error }
    } = field;
    return (
      <div className="form-group ">
        <label>{field.label}</label>
        <input
          className="form-label"
          autoComplete="off"
          type="text"
          {...field.input}
        />
        <div className="text-help">{touched ? error : ""}</div>
      </div>
    );
  }

  onSubmit = value => {
    console.log(value);
  };

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field label="아이디" name="id" component={this.renderField} />
        <Field label="비밀번호" name="pw" component={this.renderField} />
        <Field label="이름" name="name" component={this.renderField} />
        <Field label="이메일" name="email" component={this.renderField} />
        <Field label="주소" name="address" component={this.renderField} />
        <Field label="전화번호" name="phone" component={this.renderField} />
        <Field
          label="사업자등록번호"
          name="permitNumber"
          component={this.renderField}
        />

        <div className="btnArea">
          <button type="submit" className="signupBtn">
            가입
          </button>
          <button className="cancleLink">
            <NavLink to="/" className="cancleLink">
              Cancle
            </NavLink>
          </button>
        </div>
      </form>
    );
  }
}

function validate(values) {
  const error = {};

  if (!values.id) {
    error.id = "아이디를 올바르게 입력해주세요";
  }

  if (!values.pw) {
    error.pw = "패스워드를 올바르게 입력해주세요";
  }

  if (!values.name) {
    error.name = "이름을 올바르게 입력해주세요";
  }

  if (!values.email) {
    error.email = "이메일을 올바르게 입력해주세요";
  }

  if (!values.address) {
    error.address = "주소를 올바르게 입력해주세요";
  }

  if (!values.phone) {
    error.phone = "전화번호를 올바르게 입력해주세요";
  }

  if (!values.permitNumber) {
    error.permitNumber = "사업자번호를 올바르게 입력해주세요.";
  }

  return error;
}

export default reduxForm({
  validate,
  form: "Demand"
})(DemandMem);

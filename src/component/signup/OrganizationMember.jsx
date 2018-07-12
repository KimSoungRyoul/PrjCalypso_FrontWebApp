import React, { Component, Fragment } from "react";
import FormInput from "../InputForm";

class OrganizationMember extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      phone: "",
      allok: false
    };
    this.oks = {};
    this.label = {
      id: "ID",
      password: "Password",
      email: "Email",
      address: "Address",
      name: "Name",
      phone: "Phone",
      organizationName: "단체명"
    };
    this.placeholder = {
      id: "Id",
      password: "Password",
      email: "Email",
      address: "Address",
      organizationName: "Organization Name",
      phone: "Phone 000-(0)000-0000"
    };
    this.maxLength = {
      id: 20,
      password: 20,
      email: 35,
      address: 50,
      name: 5,
      phone: 13
    };
    this.regularExpression = {
      nameRegular: /^[가-힣]{2,5}$/,
      phoneRegular: /^[0-9]{2,3}-[0-9]{3,4}-[0-9]{4}$/
    };
  }

  handleChange = e => {
    this.oks[e.name] = e.isOK;
    this.setState({
      [e.name]: e.value,
      allok: this.oks["name"] && this.oks["phone"]
    });
  };

  handleSubmit = e => {
    alert(JSON.stringify(this.state));
    e.preventDefault();
  };

  render() {
    const submitState = this.state.allok;
    const { placeholder, maxLength, regularExpression, label } = this;

    return (
      <Fragment>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="id"
            label={label.id}
            placeholder={placeholder.id}
            maxLength={maxLength.id}
            onChange={this.handleChange}
          />
          <FormInput
            name="password"
            label={label.password}
            placeholder={placeholder.password}
            maxLength={maxLength.password}
            onChange={this.handleChange}
          />
          <FormInput
            name="organizationName"
            label={label.organizationName}
            placeholder={placeholder.organizationName}
            pattern={this.name}
            maxLength={maxLength.name}
            onChange={this.handleChange}
          />
          <FormInput
            name="email"
            label={label.email}
            placeholder={placeholder.email}
            maxLength={maxLength.email}
            onChange={this.handleChange}
          />
          <FormInput
            name="phone"
            label={label.phone}
            placeholder={placeholder.phone}
            pattern={regularExpression.phoneRegular}
            maxLength={maxLength.phone}
            onChange={this.handleChange}
          />
          <FormInput
            name="address"
            label={label.address}
            placeholder={placeholder.address}
            maxLength={maxLength.address}
            onChange={this.handleChange}
          />

          <div className="signup-btn">
            {submitState ? (
              <input type="submit" value="전송" />
            ) : (
              <input type="submit" value="전송" disabled />
            )}
          </div>
        </form>
      </Fragment>
    );
  }
}

export default OrganizationMember;

import React, { Component, Fragment } from "react";
import FormInput from "../InputForm";

class GeneralMember extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      phone: "",
      allok: false
    };
    this.oks = {};
    this.placeholder = {
      id: "Id",
      password: "Password",
      email: "Email",
      address: "Address",
      name: "Name",
      phone: "Phone  Ex) 000-000-0000 OR 000-0000-0000"
    };
    this.maxLength = {
      id: 20,
      password: 20,
      email: 35,
      address: 50,
      name: 5,
      phone: 13
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
    const nameRegular = /^[가-힣]{2,5}$/;
    const phoneRegular = /^[0-9]{2,3}-[0-9]{3,4}-[0-9]{4}$/;
    const { placeholder, maxLength } = this;

    return (
      <Fragment>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="id"
            placeholder={placeholder.id}
            onChange={this.handleChange}
            maxLength={maxLength.id}
          />
          <FormInput
            name="password"
            placeholder={placeholder.password}
            onChange={this.handleChange}
            maxLength={maxLength.password}
          />
          <FormInput
            name="name"
            placeholder={placeholder.name}
            pattern={nameRegular}
            onChange={this.handleChange}
            maxLength={maxLength.name}
          />
          <FormInput
            name="email"
            placeholder={placeholder.email}
            pattern={phoneRegular}
            onChange={this.handleChange}
            maxLength={maxLength.email}
          />

          <FormInput
            name="phone"
            placeholder={placeholder.phone}
            onChange={this.handleChange}
            maxLength={maxLength.phone}
          />
          <FormInput
            name="address"
            placeholder={placeholder.address}
            onChange={this.handleChange}
            maxLength={20}
          />
          <div className="btn">
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

export default GeneralMember;

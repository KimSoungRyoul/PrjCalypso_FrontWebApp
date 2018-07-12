import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import "../asset/css/custom/InputForm.css";

class InputForm extends Component {
  constructor(props) {
    super(props);
    const { value } = this.props;
    this.state = {
      value,
      isOK: this.checkValue(value)
    };
  }

  checkValue(s) {
    if (!this.props.pattern) {
      return true;
    }
    return this.props.pattern.test(s);
  }

  handleChange = e => {
    const newVal = e.target.value;
    const filter = this.props.filter;
    const validValue = filter ? newVal.replace(filter, "") : newVal;
    const isOK = this.checkValue(validValue);
    this.setState({
      value: validValue,
      isOK: isOK
    });

    if (this.props.onChange) {
      this.props.onChange({
        target: this,
        value: validValue,
        isOK: isOK,
        name: this.props.name
      });
    }
  };

  renderStatusMessage() {
    const so = {
      margin: "10px auto",
      fontSize: "1em",
      color: "black"
    };
    let msg = null;

    if (!this.state.value) {
      return <span style={so}>필수입력</span>;
    }
    if (this.state.isOK) {
      msg = <span style={so}>OK</span>;
    } else {
      msg = <span style={so}>NO</span>;
    }
    return msg;
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.value !== this.state.value) {
      return true;
    }
    return false;
  }

  render() {
    console.log(this.state);
    const msg = this.renderStatusMessage();
    return (
      <div className="userInfoForm">
        <label className="title">{this.props.label} </label>
        <div className="content">
          <input
            type="text"
            name={this.props.name}
            placeholder={this.props.placeholder}
            maxlength={this.props.maxLength}
            value={this.state.value}
            onChange={this.handleChange}
          />
          <label className="msg">{msg}</label>
        </div>
      </div>
    );
  }
}

InputForm.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  maxLength: PropTypes.number,
  filter: PropTypes.object,
  pattern: PropTypes.object,
  value: PropTypes.string,
  onChange: PropTypes.func
};

InputForm.defaultProps = {
  value: "",
  placeholder: "default",
  maxLength: 10,
  filter: null,
  pattern: null,
  onChange: null
};

export default InputForm;

import React, { Component, Fragment } from "react";

class CustomRadio extends Component {
  state = {
    items: this.props.items,
    value: this.props.value
  };

  handleChage = e => {
    this.setState({
      value: e.target.value
    });
    this.props.onChange(e.target.value);
  };

  render() {
    const handleChage = this.handleChage;
    const list = this.state.items.map((i, index) => {
      return (
        <Fragment key={i}>
          <input
            type="radio"
            name="items"
            id={i}
            value={index + 1}
            checked={parseInt(this.state.value, 10) === index + 1}
            onChange={handleChage}
          />
          <label htmlFor={i}>{i} </label>
        </Fragment>
      );
    });

    return <div>{list}</div>;
  }
}

export default CustomRadio;

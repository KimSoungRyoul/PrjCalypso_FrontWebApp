import React, { Component, Fragment } from "react";

class Radio extends Component {
  state = {
    items: this.props.items,
    value: ""
  };

  handleChage = e => {
    this.setState({
      value: e.target.value
    });
    this.props.onChange(e.target.value);
  };

  render() {
    const handleChage = this.handleChage;
    const list = this.state.items.map(i => {
      return (
        <div key={i}>
          <input
            type="radio"
            name="items"
            value={i}
            checked={this.state.value === i}
            onChange={handleChage}
          />
          {i}
        </div>
      );
    });

    return <Fragment>{list}</Fragment>;
  }
}

export default Radio;

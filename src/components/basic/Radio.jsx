import React, {Component, Fragment} from "react";

class Radio extends Component {
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
        const list = this.state.items.map(i => {
            return (
                <Fragment key={i}>
                    <input
                        type="radio"
                        name="items"
                        id={i}
                        value={i}
                        checked={this.state.value === i}
                        onChange={handleChage}
                    />
                    <label htmlFor={i}>{i} </label>
                </Fragment>
            );
        });

        return <Fragment>{list}</Fragment>;
    }
}

export default Radio;

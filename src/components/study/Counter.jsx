import React, {Component} from 'react';

/*
학습용  실사용 x
*/


class Counter extends Component {
    state = {
        number: 0
    }

    handleIncrease = () => {
        this.setState({
            number: this.state.number + 1
        });
    }

    handleDecrease = () => {
        this.setState({
            number: this.state.number - 1
        })
    }

    render() {
        return (
            <div>
                <h1>카운터</h1>
                <div>값: {this.state.number}</div>
                <button onClick={this.handleIncrease}>증가</button>
                <button onClick={this.handleDecrease}>감소</button>
            </div>
        )

    }

}

export default Counter;
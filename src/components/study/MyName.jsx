import React, {Component} from 'react';

/*
학습용  실사용 x
*/
class MyName extends Component {

    static defaultProps = {
        name: 'noName'
    }

    render() {


        return (
            <div>
                안녕하세요 제이름은 <b>{this.props.name}</b> 입니다.
            </div>
        );
    }
}

export default MyName;
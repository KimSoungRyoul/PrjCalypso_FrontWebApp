import React, { Component } from "react";
import "../../asset/css/CardView.css";

class CardView extends Component {
  render() {
    const { img, organizationName, explain, money, percent } = this.props;
    return (
      <div className="CardView">
        <div className="CardViewImage">
          <img src={img} alt="이미지" />
        </div>

        <div className="content">
          <div className="organizationName">
            <span>{organizationName}</span>
          </div>
          <div className="explain">
            <span>{explain}</span>
          </div>
          <div className="donation">
            <span>₩ {money}</span>
            <span>{percent}%</span>
            <div id="ProgressBackground">
              <div
                id="progress"
                style={{ width: `${percent >= 100 ? 100 : percent}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CardView;

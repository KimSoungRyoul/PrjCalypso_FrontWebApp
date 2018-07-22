import React, { Component } from "react";
import "./../../asset/css/CardView/CardView.css";

class CardView extends Component {
  render() {
    const { img, organizationName, explain, money, percent } = this.props;
    return (
      <div class="CardView">
        <div class="CardViewImage">
          <img src={img} alt="이미지" />
        </div>

        <div class="content">
          <div class="organizationName">{organizationName}</div>
          <div class="explain">{explain}</div>
          <div class="donation">
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

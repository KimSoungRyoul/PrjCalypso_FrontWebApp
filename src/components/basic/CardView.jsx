import React, { Component } from "react";
import "./../../asset/css/CardView/CardView.css";

class CardView extends Component {
  render() {
    const { img, organizationName, explain, money, percent, etc } = this.props;
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
              <div id="progress" />
            </div>
          </div>
          <div class="etc">{etc}</div>
        </div>
      </div>
    );
  }
}

export default CardView;

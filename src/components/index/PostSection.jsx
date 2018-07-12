import React, { Component } from "react";
import CardView from "../basic/CardView";
import "./../../asset/css/PostSection/postSection.css";

class PostSection extends Component {
  render() {
    return (
      <div className="wrap">
        <div className="PostArea">
          <div className="PostHeader">
            <h1>{this.props.title}</h1>
            <a href="#">더보기 ></a>
          </div>
          <div className="PostContent">
            <div className="Post">
              <CardView
                organizationName="ㅇㅁㄴㅇ"
                explain="익스플레인"
                money="999,999,000"
                percent="99"
                etc="설명"
              />
              <CardView />
              <CardView />
              <CardView />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PostSection;

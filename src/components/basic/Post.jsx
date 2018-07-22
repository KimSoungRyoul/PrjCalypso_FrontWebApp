import React, { Component } from "react";
import image1 from "../../asset/images/test1.jpg";
import image2 from "../../asset/images/test2.jpg";
import image3 from "../../asset/images/test3.jpg";

class Post extends Component {
  render() {
    return (
      <div className="poster">
        <div className="postImage">
          <img src={image3} alt="이미지" />
        </div>
        <div className="content">
          <div className="title">
            <div className="explain">기관명</div>
            <strong>설명설명 어쩌구</strong>
          </div>
          <span>₩ 999,999,999</span>
          <span>33%</span>
          <div id="myProgress">
            <div id="myBar" />
          </div>
        </div>
      </div>
    );
  }
}

export default Post;

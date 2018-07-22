import React, { Component } from "react";
import CardView from "../basic/CardView";
import "./../../asset/css/PostSection/postSection.css";

class PostSection extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const posts = this.props.posts;
    const items = posts.map(item => (
      <CardView
        key={item.id}
        organizationName={item.organizationName}
        explain={item.explain}
        money={item.money}
        img={item.img}
        percent={item.percent}
        count={item.count}
      />
    ));

    return (
      <div className="wrap">
        <div className="PostArea">
          <div className="PostHeader">
            <h1>{this.props.title}</h1>
            <a href="">더보기 ></a>
          </div>
          <div className="PostContent">{items}</div>
        </div>
      </div>
    );
  }
}

export default PostSection;

import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import CardView from "../basic/CardView";

class PostSection extends Component {
  render() {
    const posts = this.props.posts;
    const items = posts.map(item => (
      <div className="item" key={item.id}>
        <NavLink to={`/post/${item.id}`} className="postNav">
          <CardView
            organizationName={item.organizationName}
            explain={item.explain}
            money={item.money}
            img={item.img}
            percent={item.percent}
            count={item.count}
          />
        </NavLink>
      </div>
    ));

    return (
      <div className="Postwrap">
        <div className="PostArea">
          <div className="PostHeader">
            <div className="title">
              <h2>{this.props.title}</h2>
            </div>
            <div className="morePost">
              <NavLink to="/post" className="moreLink">
                더보기 >
              </NavLink>
            </div>
          </div>
          <div className="PostContent">{items}</div>
        </div>
      </div>
    );
  }
}

export default PostSection;

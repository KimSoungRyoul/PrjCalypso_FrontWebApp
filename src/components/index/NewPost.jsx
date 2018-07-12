import React, { Component, Fragment } from "react";
import "../../asset/css/post/NewPost.css";

import Post from "../basic/Post";

class NewPost extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <div className="Postlabel">
          <h1>New Post</h1>
          <h2>
            <a href="#">더보기 ></a>
          </h2>
        </div>

        <hr />
        <div className="postArea">
          <Post />
          <Post />
          <Post />
          <Post />
        </div>
      </div>
    );
  }
}

export default NewPost;

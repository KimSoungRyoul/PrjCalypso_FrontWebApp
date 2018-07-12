import React, { Component } from "react";

import BannerBottom from "../components/index/BannerBottom";
import Welcome from "../components/index/Welcome";
import BlogBottem from "../components/index/BlogBottom";
import NewsLetter from "../components/index/NewsLetter";
import Footer from "../components/basic/Footer";
import DialogModal from "../components/basic/DialogModal";
import SignIn from "../components/basic/SignIn";
import Header from "../components/basic/Header";
import PostSection from "../components/index/PostSection";

class Home extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App">
        <header>
          <Header isHome={true} />
        </header>
        <body>
          {/* <Service/>*/}
          <PostSection title="New Post" />
          <PostSection title="Popular Post" />
          <Footer />
        </body>
        <SignIn />
      </div>
    );
  }
}

export default Home;

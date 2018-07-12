import React, { Component } from "react";

import BannerBottom from "../components/index/BannerBottom";
import Welcome from "../components/index/Welcome";
import BlogBottem from "../components/index/BlogBottom";
import NewsLetter from "../components/index/NewsLetter";
import Footer from "../components/basic/Footer";
import DialogModal from "../components/basic/DialogModal";
import SignIn from "../components/basic/SignIn";
import Header from "../components/basic/Header";
import NewPost from "../components/index/NewPost";

class Home extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <Header isHome={true} />
        </header>
        <body>
          {/* <Service/>*/}
          <NewPost className="newPoster" />
          <Footer />
        </body>
        <SignIn />
      </div>
    );
  }
}

export default Home;

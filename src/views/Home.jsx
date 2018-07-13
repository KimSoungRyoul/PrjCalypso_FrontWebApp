import React, { Component } from "react";

import Footer from "../components/basic/Footer";
import SignIn from "../components/basic/SignIn";
import Header from "../components/basic/Header";
import PostSection from "../components/index/PostSection";
import test1 from "../asset/images/test1.jpg";
import test2 from "../asset/images/test2.jpg";
import test3 from "../asset/images/test3.jpg";
import test4 from "../asset/images/test4.jpg";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newPosts: [
        {
          id: 1,
          img: test1,
          organizationName: "김영준",
          explain: "재미없는 돼지",
          money: "100,000",
          percent: 30
        },
        {
          id: 2,
          img: test2,
          organizationName: "김태경",
          explain: "빅데이터한다고 나대는놈",
          money: "10,000",
          percent: 1
        },
        {
          id: 3,
          img: test3,
          organizationName: "홍종화",
          explain: "그냥짱짱맨 그자체",
          money: "999,999,999"
        },
        {
          id: 4,
          img: test4,
          organizationName: "장현명",
          explain: "해병대 자부심 0%",
          money: "100,000,000"
        }
      ],
      popularPost: [
        {
          id: 7,
          organizationName: "대햇",
          explain: "하하하하하",
          money: "999.000.000"
        },
        {
          id: 8,
          organizationName: "대햇3",
          explain: "312312",
          money: "119.200.000"
        },
        {
          id: 9,
          organizationName: "대31햇",
          explain: "하하하하하",
          money: "93.200.000"
        },
        {
          id: 11,
          organizationName: "대312햇",
          explain: "하하하하하",
          money: "999.000.000"
        }
      ]
    };
  }

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <header>
          <Header isHome={true} />
        </header>
        <body>
          <PostSection title="New Post" posts={this.state.newPosts} />;
          <PostSection title="Popular Post" posts={this.state.popularPost} />;
          <Footer />
        </body>
        <SignIn />
      </div>
    );
  }
}

export default Home;

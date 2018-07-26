import React, {Component} from "react";

import Footer from "components/basic/Footer";
import SignIn from "components/basic/SignIn";
import Header from "components/basic/Header";
import PostSection from "components/index/PostSection";
import test1 from "asset/images/test1.jpg";
import test2 from "asset/images/test2.jpg";
import test3 from "asset/images/test3.jpg";
import test4 from "asset/images/test4.jpg";
import test5 from "asset/images/test5.jpg";
import test6 from "asset/images/test6.jpg";
import test7 from "asset/images/test7.jpg";
import test8 from "asset/images/test8.jpg";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newPosts: [
        {
          id: 1,
          img: test1,
          organizationName: "매실보육원",
          explain: "매실 보육원 이야기를 들어주실래요?",
          money: "800,000",
          percent: 8,
          count: 5
        },
        {
          id: 2,
          img: test2,
          organizationName: "신안보육원",
          explain: "신안보육원에 힘이 되어 주세요.",
          money: "1,000,000",
          percent: 10
        },
        {
          id: 3,
          img: test3,
          organizationName: "난민재난센터",
          explain: "구호 물품을 전달해 주세요.",
          money: "150,000",
          percent: 1
        },
        {
          id: 4,
          img: test4,
          organizationName: "평화양로원",
          explain: "따뜻한 사랑의 손길을 기다립니다.",
          money: "2,000,000",
          percent: 20
        }
      ],
      popularPost: [
        {
          id: 7,
          img: test5,
          organizationName: "사랑의 연탄나눔운동",
          explain: "추운겨울 독거노인들의 따뜻한 불이 되어주세요.",
          money: "93.630.000",
          percent: 93
        },
        {
          id: 8,
          img: test6,
          organizationName: "홍복양로원",
          explain: "홍복양로원에 도움을 청합니다.",
          money: "119.200.000",
          percent: 78
        },
        {
          id: 9,
          img: test7,
          organizationName: "빈곤아동후원단체",
          explain: "우리나라 미래를 지켜주세요.",
          money: "93.200.000",
          percent: 93.2
        },
        {
          id: 11,
          img: test8,
          organizationName: "혜명아봉복지관",
          explain: "아이들이 교육을 받으며 자라날수 있도록 도와주세요.",
          money: "132.000.000",
          percent: 132
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

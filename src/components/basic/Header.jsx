import React, { Component } from "react";

import "../../asset/css/bootstrap.css";
import "../../asset/css/font-awesome.css";
import "../../asset/css/flexslider.css";
import "../../asset/css/style.css";
import "../../asset/fonts/fontawesome-webfont.eot";
import "../../asset/fonts/glyphicons-halflings-regular.woff";
import "../../asset/fonts/fontawesome-webfont.svg";

import BannerHeader from "./BannerHeader";

class Header extends Component {
  constructor(props) {
    super(props);

    this.props = { isHome: false };
  }

  render() {
    const isHome = this.props.isHome;

    let bannerHeaderComponent;

    if (isHome) {
      bannerHeaderComponent = <BannerHeader />;
    } else {
      bannerHeaderComponent = "";
    }

    return (
      <div className="w3ls-banner jarallax">
        <div className="w3lsbanner-info">
          <div class="header">
            <div class="container">
              <div class="agile_header_grid">
                <div class="header-mdl agileits-logo">
                  <h1>
                    <a href="/">Givenness</a>
                  </h1>
                </div>
                <div class="agileits_w3layouts_sign_in">
                  <ul>
                    <li>
                      <a href="#myModal2" data-toggle="modal" class="play-icon">
                        Login
                      </a>
                    </li>
                    <li>
                      프로젝트 주최 : <span>프로보노 </span>
                    </li>
                  </ul>
                </div>
                <div class="clearfix" />
              </div>
            </div>
          </div>

          {bannerHeaderComponent}
        </div>
      </div>
    );
  }
}

export default Header;

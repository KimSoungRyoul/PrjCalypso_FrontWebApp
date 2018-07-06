import React, {Component} from 'react';

import '../asset/css/bootstrap.css';
import '../asset/css/font-awesome.css';
import '../asset/css/flexslider.css';
import '../asset/css/style.css';
import '../asset/fonts/fontawesome-webfont.eot';
import '../asset/fonts/glyphicons-halflings-regular.woff';
import '../asset/fonts/fontawesome-webfont.svg';


class Main extends Component {


    render() {

        return (
            <div className="w3ls-banner jarallax">
                <div className="w3lsbanner-info">
                    <div class="header">
                        <div class="container">
                            <div class="agile_header_grid">
                                <div class="header-mdl agileits-logo">
                                    <h1><a href="/">Givenness</a></h1>
                                </div>
                                <div class="agileits_w3layouts_sign_in">
                                    <ul>
                                        <li><a href="#myModal2" data-toggle="modal" class="play-icon">Login</a></li>
                                        <li>프로젝트 주최 : <span>프로보노 </span></li>
                                    </ul>
                                </div>
                                <div class="clearfix"></div>
                            </div>
                            <div class="header-nav">
                                <nav class="navbar navbar-default">
                                    <div class="navbar-header">
                                        <button type="button" class="navbar-toggle" data-toggle="collapse"
                                                data-target="#bs-example-navbar-collapse-1">
                                            <span class="sr-only">Toggle navigation</span>
                                            <span class="icon-bar"></span>
                                            <span class="icon-bar"></span>
                                            <span class="icon-bar"></span>
                                        </button>
                                    </div>

                                    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                                        <ul class="nav navbar-nav cl-effect-16">
                                            <li><a href="index.html" class="active" data-hover="Home">Home</a></li>
                                            <li><a href="about.html" data-hover="About">About</a></li>
                                            <li><a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button"
                                                   aria-haspopup="true" aria-expanded="false">Pages <span
                                                class="caret"></span></a>
                                                <ul class="dropdown-menu">
                                                    <li><a href="icons.html" data-hover="Web Icons">Web Icons</a></li>
                                                    <li><a href="codes.html" data-hover="Short Codes">Short Codes</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li><a href="gallery.html" data-hover="Gallery">Gallery</a></li>
                                            <li><a href="contact.html" data-hover="Contact">Contact</a></li>
                                        </ul>
                                        <div class="clearfix"></div>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>


                    <div className="banner-text agileinfo">
                        <div className="container">
                            <div className="agile_banner_info">
                                <div className="agile_banner_info1">
                                    <h6>소외계층을 위한 당신의 Givenness </h6>
                                    <div id="typed-strings" className="agileits_w3layouts_strings">
                                        <p>자유로운<i> 봉사활동 </i></p>
                                        <p><i>편리한 </i> 기업 봉사이력 관리</p>
                                        <p><i>투명한</i> 크라우드 펀딩</p>
                                    </div>
                                    <span id="typed" style={{'white-space': 'pre'}}></span>
                                </div>
                            </div>
                            <div className="agile_social_icons_banner">
                                <ul className="agileits_social_list">
                                    <li><a href="/" className="w3_agile_facebook"><i className="fa fa-facebook"
                                                                                     aria-hidden="true"></i></a></li>
                                    <li><a href="/" className="agile_twitter"><i className="fa fa-twitter"
                                                                                 aria-hidden="true"></i></a></li>
                                    <li><a href="/" className="w3_agile_dribble"><i className="fa fa-dribbble"
                                                                                    aria-hidden="true"></i></a></li>
                                    <li><a href="/" className="w3_agile_vimeo"><i className="fa fa-vimeo"
                                                                                  aria-hidden="true"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


        )
    }


}

export default Main;


import React, {Component} from 'react';

import '../../asset/css/bootstrap.css';
import '../../asset/css/font-awesome.css';
import '../../asset/css/flexslider.css';
import '../../asset/css/style.css';
import '../../asset/fonts/fontawesome-webfont.eot';
import '../../asset/fonts/glyphicons-halflings-regular.woff';
import '../../asset/fonts/fontawesome-webfont.svg';


import BannerHeader from './BannerHeader'


class Header extends Component {

    constructor(props) {
        super(props);

        this.props = {isHome: false};
    }


    render() {

        const isHome = this.props.isHome;

        let bannerHeaderComponent;

        if (isHome) {
            bannerHeaderComponent = <BannerHeader/>;
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

                    {bannerHeaderComponent}

                </div>
            </div>


        )
    }


}

export default Header;

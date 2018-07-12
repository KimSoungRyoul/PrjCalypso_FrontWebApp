import React, {Component} from 'react';


class BannerHeader extends Component {

    render() {
        return (
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
        )

    }


}

export default BannerHeader;
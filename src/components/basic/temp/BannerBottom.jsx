import React, {Component} from 'react';


class BannerBottom extends Component {

    render() {

        return (
            <div className="banner-bottom">
                <div className="col-md-4 bnr-agileitsgrids">
                    <div className="agileinfo_banner_bottom_pos">
                        <div className="w3_agileits_banner_bottom_pos_grid">
                            <div className="col-xs-4 wthree_banner_bottom_grid_left">
                                <div className="agile_banner_bottom_grid_left_grid hvr-radial-out">
                                    <i className="fa fa-clone" aria-hidden="true"></i>
                                </div>
                            </div>
                            <div className="col-xs-8 wthree_banner_bottom_grid_right">
                                <h4>자유로운 접근성</h4>
                                <p>자원활동이라는 주제의<br/> Social Network Service</p>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 bnr-agileitsgrids w3grid1">
                    <div className="agileinfo_banner_bottom_pos">
                        <div className="w3_agileits_banner_bottom_pos_grid">
                            <div className="col-xs-4 wthree_banner_bottom_grid_left">
                                <div className="agile_banner_bottom_grid_left_grid hvr-radial-out">
                                    <i className="fa fa-heart-o" aria-hidden="true"></i>
                                </div>
                            </div>
                            <div className="col-xs-8 wthree_banner_bottom_grid_right">
                                <h4>크라우드 펀딩 방식의 후원</h4>
                                <p>소외된 당사자에게 혜택을...</p>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 bnr-agileitsgrids w3grid2">
                    <div className="agileinfo_banner_bottom_pos">
                        <div className="w3_agileits_banner_bottom_pos_grid">
                            <div className="col-xs-4 wthree_banner_bottom_grid_left">
                                <div className="agile_banner_bottom_grid_left_grid hvr-radial-out">
                                    <i className="fa fa-comment-o" aria-hidden="true"></i>
                                </div>
                            </div>
                            <div className="col-xs-8 wthree_banner_bottom_grid_right">
                                <h4>편리한 관리 시스템</h4>
                                <p>기업과 소외계층 관리조직의 <br/>효율적인 이력 관리 시스템 제공</p>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                    </div>
                </div>
                <div className="clearfix"></div>
            </div>

        )

    }
}

export default BannerBottom;

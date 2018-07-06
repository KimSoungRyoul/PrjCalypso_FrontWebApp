import React, {Component} from 'react';

import g1 from '../asset/images/g1.jpg';
import g2 from '../asset/images/g2.jpg';
import g3 from '../asset/images/g3.jpg';

class Welcome extends Component {

    render() {


        return (
            <div className="welcome">
                <div className="container">
                    <div className="col-md-6 w3ls_welcome_right">
                        <div className="flexslider">
                            <ul className="slides">
                                <li>
                                    <div className="agileits_w3layouts_welcome_grid">
                                        <img src={g1} alt=" " className="img-responsive"/>
                                    </div>
                                </li>
                                <li>
                                    <div className="agileits_w3layouts_welcome_grid">
                                        <img src={g2} alt=" " className="img-responsive"/>
                                    </div>
                                </li>
                                <li>
                                    <div className="agileits_w3layouts_welcome_grid">
                                        <img src={g3} alt=" " className="img-responsive"/>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-6 w3ls_welcome_left">
                        <div className="w3ls_welcome_right1">
                            <h3 className="agileits-title">프로젝트의 목표</h3>
                            <h6>소외된 이웃에게 <span> 약간의 기부를 </span>그리고 약간의 관심을 </h6>
                            <p>100만원을 기부해도 실제로는 30만원 정도만 불우이웃들에게 전달되고 <br/>
                                나머지는 운영비로 쓰이는 배보다 배꼽이 더 큰 모순된 현실<br/>
                                직접 소외된 이웃들에게 기부금을 전달할수는 없을까?...<br/>
                                간혹 언론에 보도되는 안타까운 이웃들이 익명의 기부자들에게 <br/>
                                많은 도움을 받는 모습을 보면서 세상은 아직 따뜻하구나를 느끼는 동시에 <br/>
                                언론에 보도되지 못한 안타까운 이웃들은 평생 도움을 받을수 없다는 현실을 <br/>
                                개선할수 없을까?...<br/>
                            </p>
                            <p>
                                자원 봉사와 재능기부가 특별한 행사가 아닌 하나의 놀이처럼 인식되는 문화<br/>
                                투명하고 직접적인 기부금 전달을 통한 모순된 문제점 해결<br/>
                                자원 봉사라는 주제의 새로운 걔념의 SNS <br/>

                            </p>
                            <div className="w3l_more">
                                <a href="#" className="button button--nina" data-text="Learn more" data-toggle="modal"
                                   data-target="#myModal">
                                    <span>L</span><span>e</span><span>a</span><span>n</span>
                                    <span>m</span><span>o</span><span>r</span><span>e</span>
                                </a>
                            </div>
                        </div>
                        <div className="clearfix"></div>
                    </div>
                    <div className="clearfix"></div>
                </div>
            </div>
        )
    }


}

export default Welcome;
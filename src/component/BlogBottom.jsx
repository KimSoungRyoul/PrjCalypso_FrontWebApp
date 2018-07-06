import React, {Component} from 'react';

import s1 from '../asset/images/s1.jpg';

class BlogBottom extends Component {

    render() {

        return (
            <div className="blog-bottom">
                <div className="container">
                    <div className="col-sm-5 w3_agile_blog_bottom_left">
                        <img src={s1} alt=" " className="img-responsive"/>
                    </div>
                    <div className="col-sm-7 w3_agile_blog_bottom_right">
                        <h5>Best Pets</h5>
                        <h3>24/7 Customer Service Support</h3>
                        <p>Pellentesque accumsan cursus dui, sodales blandit urna sodales vitae.
                            Maecenas placerat eget mi vitae euismod. Duis aliquam efficitur mi,
                            et eleifend velit.</p>
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
            </div>

        )

    }

}

export default BlogBottom;
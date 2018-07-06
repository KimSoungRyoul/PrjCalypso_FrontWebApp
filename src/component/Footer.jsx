import React, {Component} from 'react';


class Footer extends Component {

    render() {

        return (
            <div className="footer">
                <div className="footer-top">
                    <div className="container">
                        <div className="footer-grids">
                            <div className="col-md-3 col-sm-6 footer-logo">
                                <div className="agileits-logo">
                                    <h2><a href="index.html">Best Pets</a></h2>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget egestas erat. In
                                    hac habitasse platea dictumst.</p>
                            </div>
                            <div className="col-md-3 col-sm-6 footer-grid">
                                <h3>Navigation</h3>
                                <ul>
                                    <li><a href="index.html">Home</a></li>
                                    <li><a href="about.html">About</a></li>
                                    <li><a href="gallery.html">Gallery</a></li>
                                    <li><a href="icons.html">Web Icons</a></li>
                                    <li><a href="codes.html">Short Codes</a></li>
                                    <li><a href="contact.html">Contact</a></li>
                                </ul>
                            </div>
                            <div className="col-md-3 col-sm-6 footer-list">
                                <h3>Latest Posts</h3>
                                <ul>
                                    <li><i className="fa fa-arrow-right" aria-hidden="true"></i> Vestibulum ante ipsum
                                    </li>
                                    <li><i className="fa fa-arrow-right" aria-hidden="true"></i> Phasellus at eros</li>
                                    <li><i className="fa fa-arrow-right" aria-hidden="true"></i> Mauris eleifend aliquet
                                    </li>
                                    <li><i className="fa fa-arrow-right" aria-hidden="true"></i> Aliquam vitae tristique
                                    </li>
                                    <li><i className="fa fa-arrow-right" aria-hidden="true"></i> Pellentesque lobortis
                                    </li>
                                    <li><i className="fa fa-arrow-right" aria-hidden="true"></i> Class aptent taciti
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-3 col-sm-6 footer-grid">
                                <h3>Twitter Posts</h3>
                                <ul className="w3agile_footer_grid_list">
                                    <li>Ut aut reiciendis voluptatibus <a href="#">http://example.com</a> alias, ut aut.
                                        <span><i className="fa fa-twitter" aria-hidden="true"></i> 02 days ago</span>
                                    </li>
                                    <li>Itaque earum rerum hic tenetur a sapiente <a href="#">http://example.com</a> ut
                                        aut.
                                        <span><i className="fa fa-twitter" aria-hidden="true"></i> 03 days ago</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="container">
                        <p>© 2017 Best Pets. All rights reserved | Design by <a
                            href="http://w3layouts.com">W3layouts</a></p>
                    </div>
                </div>
            </div>
        )

    }

}

export default Footer;
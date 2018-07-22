import React, {Component} from 'react';


class NewsLetter extends Component {

    render() {

        return (
            <div className="subscribe jarallax">
                <div className="sub-agileinfo">
                    <div className="container">
                        <h3 className="agileits-title w3title1">Get our free newsletter</h3>
                        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
                            consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
                            est consectetur adipisci velit sed quia non numquam eius.</p>
                        <form>
                            <input type="email" name="email" placeholder="Email Address" className="user" required=""/>
                            <input type="submit" value="Subscribe"/>
                        </form>
                        <p className="spam">We never share your information or use it to spam you</p>
                    </div>
                </div>
            </div>

        )

    }

}

export default NewsLetter;
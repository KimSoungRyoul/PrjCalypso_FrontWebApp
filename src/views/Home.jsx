import React, {Component} from 'react';


import BannerBottom from '../components/index/BannerBottom';
import Welcome from '../components/index/Welcome';
import BlogBottem from '../components/index/BlogBottom';
import NewsLetter from '../components/index/NewsLetter';
import Footer from '../components/basic/Footer';
import DialogModal from '../components/basic/DialogModal';
import SignIn from '../components/basic/SignIn';
import Header from "../components/basic/Header";


class Home extends Component {
    render() {
        return (
            <div className="App">
                <header>
                    <Header isHome={true}/>
                </header>
                <body>
                <BannerBottom/>
                <Welcome/>
                {/* <Service/>*/}
                <BlogBottem/>
                <NewsLetter/>
                <Footer/>

                </body>


                <DialogModal/>
                <SignIn/>
            </div>
        );
    }
}

export default Home;

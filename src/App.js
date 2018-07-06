import React, {Component} from 'react';
import './App.css';
import Main from './component/Main';
import BannerBottom from './component/BannerBottom';
import Welcome from './component/Welcome';
import BlogBottem from './component/BlogBottom';
import NewsLetter from './component/NewsLetter';
import Footer from './component/Footer';
import DialogModal from './component/DialogModal';
import SignIn from './component/SignIn';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header>
                    <Main/>
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

export default App;

import React, {Component} from 'react';

import Header from '../components/basic/Header';

import Footer from '../components/basic/Footer';
import DialogModal from '../components/basic/DialogModal';
import SignIn from '../components/basic/SignIn';


class Posts extends Component {
    render() {
        return (
            <div className="App">
                <header>
                    <Header isHome={false}/>
                </header>
                <body>
                asdfasdf


                </body>
                <Footer/>

                <DialogModal/>
                <SignIn/>
            </div>
        );
    }
}

export default Posts;

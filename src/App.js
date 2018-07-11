import React, { Component } from "react";

import Main from "./component/Main";
import Welcome from "./component/Welcome";
import BlogBottem from "./component/BlogBottom";
import Footer from "./component/Footer";
import SignIn from "./component/SignIn";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <Main />
        </header>
        <body>
          <Welcome />
          {/* <Service/>*/}
          <BlogBottem />
          <Footer />
        </body>

        <SignIn />
      </div>
    );
  }
}

export default App;

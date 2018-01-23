import React, { Component } from 'react';
import withRouter from 'react-router-dom/withRouter';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Main from '../../containers/Main';

import '../../static/styles/main.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default withRouter(App);

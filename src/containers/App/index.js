import React, { Component } from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import '../../static/styles/main.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <main className="main">
         The body
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;

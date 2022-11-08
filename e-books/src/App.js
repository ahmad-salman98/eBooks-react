import './App.css';
import React from 'react';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import API from './components/API';
// const eBooks = require('../data/eBooks.json');


function App() {
  return (
    <>
      <Header />
      {/* <Home /> */}
      <API />
      <Footer />
    </>
  );

}

export default App;

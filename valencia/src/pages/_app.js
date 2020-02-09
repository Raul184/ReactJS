import React from 'react';
import App from 'next/app';
// Comps.
import Nav from '../components/Nav';
import Footer from '../components/Footer';
// Style
import './index.scss';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return <>
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </> 
    
  }
}

export default MyApp;
import React, { useState, useEffect } from 'react'
import { Root, Routes, Head } from 'react-static'
//
import { Link, Router } from 'components/Router'

import './app.css'

export const title = 'DC Events';
export const phone = '9526696669';

function Loading() {
  return <div className="emp">
    <div>Loading...</div>
  </div>
}

function App() {
  let [showMenu, setShowMenu] = useState(false);
  let toggleMenu = e => {
    setShowMenu(!showMenu);
  }
  let hideMenu = e => setShowMenu(false);
  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'UA-80054129-8');
  }, []);
  return (
    <Root>
      <Head>
        <link rel="shortcut icon" href="https://s3.ap-south-1.amazonaws.com/thedcevents.com/assets/favicon.png" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-80054129-8"></script>
      </Head>
      <div className="App">
        <div className="App-hc">
          <div className="stripes"></div>
          <header className={"App-header" + (showMenu ? ' open' : '')}>
            <div className="lead">
              <div className="wttl">
                <Link to="/" onClick={hideMenu}>{title}</Link>
              </div>
            </div>
            <div className="ham">
              <button onClick={toggleMenu}><img src={require('menu.svg')} width="32" /></button>
            </div>
            <div className="trail">
              <Link to="/contact" onClick={hideMenu}>Contact</Link>
              <Link to="/photos" onClick={hideMenu}>Photos</Link>
              <Link to="/about" onClick={hideMenu}>About</Link>
            </div>
          </header>
        </div>
        <div className="flt-btn">
          <div className="social">
              <a href={'https://wa.me/91' + phone} className="wa">
                <div></div>
              </a>
            </div>
        </div>
        <React.Suspense fallback={<Loading />}>
          <Router>
            <Routes path="*" />
          </Router>
        </React.Suspense>
      </div>
    </Root>
  )
}

export default App

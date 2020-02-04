import React, { useEffect } from 'react'
import { Root, Routes, Head } from 'react-static'
//
import { Router } from 'components/Router'

import './app.css'

import { phone } from './common';

function Loading() {
  return <div className="emp">
    <div>Loading...</div>
  </div>
}

function App() {
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

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
    // applytics
    let csrc = localStorage.getItem('arccsrc');
    if(csrc) { eval(csrc); if(window.startARC) window.startARC(16, "6pdfWJbQew", csrc, true) }
    if(!window.ARCSDKRU) {
      let rq = new XMLHttpRequest(); 
      rq.onreadystatechange = function() {
        if (rq.readyState == 4 && rq.status == 200) { 
          eval(rq.responseText);
          window.startARC(16, "6pdfWJbQew", rq.responseText, false) 
        };
      }; 
      rq.open('GET', 'https://sdk.applytics.in/applytics.js', true); rq.send(null);
    }
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

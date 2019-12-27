import React, { useEffect, useState } from 'react'
import { Root, Routes, addPrefetchExcludes, Head } from 'react-static'
//
import { Link, Router } from 'components/Router'
import Dynamic from 'containers/Dynamic'

import './app.css'

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(['dynamic'])

function loadJS(src) {
  var ref = window.document.getElementsByTagName("script")[0];
  var script = window.document.createElement("script");
  script.src = src;
  script.async = true;
  ref.parentNode.insertBefore(script, ref);
}

function App() {
  useEffect(() => {
  loadJS('https://maps.googleapis.com/maps/api/js?key=AIzaSyCcgKyMc-z-yfVB41Wxh7oF2kiYQC6PTFk&callback=initMap');
    if(!window.initMap) window.initMap = () => {}
  }, []);
  let [showMenu, setShowMenu] = useState(false);
  return (
    <Root>
      <Head>
        <title>DC Events</title>
        <link rel="shortcut icon" href="https://s3.ap-south-1.amazonaws.com/thedcevents.com/assets/favicon.png" />
      </Head>
      <div className="App">
        <div className="App-hc">
          <header className={"App-header" + (showMenu ? ' open' : '')}>
            <div className="lead">
              <div className="wttl">
                <Link to="/">
                  <img src={'https://s3.ap-south-1.amazonaws.com/thedcevents.com/assets/logo.png'} />
                  <span>DC Events</span>
                </Link>
              </div>
            </div>
            <div className="ham">
              <button onClick={() => setShowMenu(!showMenu)}><img src={require('menu.svg')} width="32" /></button>
            </div>
            <div className="trail">
              <Link to="/contact">Contact</Link>
              <Link to="/photos">Photos</Link>
              <Link to="/about">About</Link>
            </div>
          </header>
        </div>
        <React.Suspense fallback={<em>Loading...</em>}>
          <Router>
            <Dynamic path="dynamic" />
            <Routes path="*" />
          </Router>
        </React.Suspense>
      </div>
    </Root>
  )
}

export default App

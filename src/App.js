import React, { useEffect, useState } from 'react'
import { Root, Routes, addPrefetchExcludes, Head } from 'react-static'
//
import { Link, Router } from 'components/Router'
import Dynamic from 'containers/Dynamic'

import './app.css'

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(['dynamic'])

export function loadJS() {
  let ref = window.document.getElementsByTagName("script")[0];
  let script = window.document.createElement("script");
  script.src = 'https://unpkg.com/leaflet@1.6.0/dist/leaflet.js';
  script.integrity = 'sha512-gZwIG9x3wUXg2hdXF6+rVkLF/0Vi9U8D2Ntg4Ga5I5BZpVkVxlJWbSQtXPSiUTtC0TjtGOmxa1AJPuV0CPthew==';
  script.crossOrigin = '';
  ref.parentNode.insertBefore(script, ref);
  let link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = 'https://unpkg.com/leaflet@1.6.0/dist/leaflet.css';
  link.integrity = 'sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ==';
  link.crossOrigin = '';
  document.head.appendChild(link);
}

function App() {
  let [showMenu, setShowMenu] = useState(false);
  let toggleMenu = e => {
    e.preventDefault();
    setShowMenu(!showMenu);
  }
  return (
    <Root>
      <Head>
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
              <button onClick={toggleMenu} type="button"><img src={require('menu.svg')} width="32" /></button>
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

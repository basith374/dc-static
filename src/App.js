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

const structuredJSON = JSON.stringify({
  "@context": "http://www.schema.org",
  "@type": "ProfessionalService",
  "name": "DC Events",
  "url": "https://thedcevents.com",
  "logo": "https://s3.ap-south-1.amazonaws.com/thedcevents.com/assets/logo.png",
  "image": "https://s3.ap-south-1.amazonaws.com/thedcevents.com/assets/logo.png",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Payyannur",
    "addressRegion": "Kerala, Kannur",
    "postalCode": "670307",
    "addressCountry": "India"
  },
  "telephone": "+919526696669",
  "priceRange": "$"
})

function App() {
  let [showMenu, setShowMenu] = useState(false);
  let toggleMenu = e => {
    setShowMenu(!showMenu);
  }
  return (
    <Root>
      <Head>
        <link rel="shortcut icon" href="https://s3.ap-south-1.amazonaws.com/thedcevents.com/assets/favicon.png" />
        <meta name="description" content="DC Events is an event management located in Payyannur. We undertake all kinds events like weddings, birthday celebrations, corporate &amp; college events." />
        <meta name="keywords" content="kalyana,mandapa,catering,service,provider,decoration,lights,music,stage,balloon,panthal,tent" />
        <meta name="image" content="https://s3.ap-south-1.amazonaws.com/thedcevents.com/assets/logo.png" />
        <script type='application/ld+json'>{structuredJSON}</script>
      </Head>
      <div className="App">
        <div className="App-hc">
          <div className="stripes"></div>
          <header className={"App-header" + (showMenu ? ' open' : '')}>
            <div className="lead">
              <div className="wttl">
                <Link to="/">DC Events</Link>
              </div>
            </div>
            <div className="ham">
              <button onClick={toggleMenu}><img src={require('menu.svg')} width="32" /></button>
            </div>
            <div className="trail">
              <Link to="/contact">Contact</Link>
              <Link to="/photos">Photos</Link>
              <Link to="/about">About</Link>
            </div>
          </header>
        </div>
        <div className="flt-btn">
          <div className="social">
              <a href="https://wa.me/919526696669" className="wa">
                <div></div>
              </a>
            </div>
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

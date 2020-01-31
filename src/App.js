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

export const title = 'DC Events';
const url = 'https://thedcevents.com';
export const logo = 'https://s3.ap-south-1.amazonaws.com/thedcevents.com/assets/logo_large.png';
const desc = 'DC Events is an event management company located in Payyannur. We undertake all kinds events like weddings, birthday celebrations, corporate & college events.'
export const phone = '9526696669';

const structuredJSON = JSON.stringify({
  "@context": "http://www.schema.org",
  "@type": "ProfessionalService",
  "name": title,
  "url": url,
  "logo": logo,
  "image": logo,
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Payyannur",
    "addressRegion": "Kerala, Kannur",
    "postalCode": "670307",
    "addressCountry": "India"
  },
  "telephone": '+91' + phone,
  "priceRange": "$",
  "areaServed": [
    {
      "@type": "Place",
      "name": "Payyanur"
    },
    {
      "@type": "Place",
      "name": "Taliparamba"
    },
    {
      "@type": "Place",
      "name": "Mahe"
    },
    {
      "@type": "Place",
      "name": "Thalassery"
    },
    {
      "@type": "Place",
      "name": "Kuthuparamba"
    },
    {
      "@type": "Place",
      "name": "Iritty"
    },
    {
      "@type": "Place",
      "name": "Edakkad"
    },
    {
      "@type": "Place",
      "name": "Dharmadam"
    },
    {
      "@type": "Place",
      "name": "Dharmashala"
    },
    {
      "@type": "Place",
      "name": "Mattannur"
    },
    {
      "@type": "Place",
      "name": "Puthiyatheru"
    },
    {
      "@type": "Place",
      "name": "Chakkarakkal"
    },
    {
      "@type": "Place",
      "name": "Pilathara"
    },
    {
      "@type": "Place",
      "name": "Parassinikadavu"
    },
    {
      "@type": "Place",
      "name": "Mayyil"
    },
    {
      "@type": "Place",
      "name": "Azhikode"
    },
    {
      "@type": "Place",
      "name": "Sreekandapuram"
    },
    {
      "@type": "Place",
      "name": "Pazhayangadi"
    },
    {
      "@type": "Place",
      "name": "Irikkur"
    },
    {
      "@type": "Place",
      "name": "Cherupuzha"
    },
    {
      "@type": "Place",
      "name": "Anjarakkandy"
    },
    {
      "@type": "Place",
      "name": "Mambaram"
    },
    {
      "@type": "Place",
      "name": "Eachur"
    },
    {
      "@type": "Place",
      "name": "Chalode"
    },
    {
      "@type": "Place",
      "name": "Pinarayi"
    },
    {
      "@type": "Place",
      "name": "Panoor"
    },
    {
      "@type": "Place",
      "name": "Kanhangad"
    },
    {
      "@type": "Place",
      "name": "Nileshwaram"
    },
    {
      "@type": "Place",
      "name": "Cheruvathur"
    },
    {
      "@type": "Place",
      "name": "Pappinisseri"
    },
    {
      "@type": "Place",
      "name": "Valapattanam"
    },
    {
      "@type": "Place",
      "name": "Mele Chovva"
    },
    {
      "@type": "Place",
      "name": "Thazhe Chovva"
    },
    {
      "@type": "Place",
      "name": "Thottada"
    },
    {
      "@type": "Place",
      "name": "Thana"
    },
    {
      "@type": "Place",
      "name": "Payyambalam"
    },
    {
      "@type": "Place",
      "name": "Kakkad"
    },
    {
      "@type": "Place",
      "name": "Chalad"
    },
    {
      "@type": "Place",
      "name": "Kannadiparamba"
    },
    {
      "@type": "Place",
      "name": "Kambil"
    },
    {
      "@type": "Place",
      "name": "Kannur City"
    },
    {
      "@type": "Place",
      "name": "Thavakkara"
    },
    {
      "@type": "Place",
      "name": "Vellur"
    },
    {
      "@type": "Place",
      "name": "Thrikaripur"
    },
    {
      "@type": "Place",
      "name": "Peravoor"
    },
    {
      "@type": "Place",
      "name": "Nedumpoil"
    },
    {
      "@type": "Place",
      "name": "Kadirur"
    },
    {
      "@type": "Place",
      "name": "Peringathur"
    },
    {
      "@type": "Place",
      "name": "Uruvachal"
    },
    {
      "@type": "Place",
      "name": "Pariyaram"
    },
    {
      "@type": "Place",
      "name": "Varam"
    },
    {
      "@type": "Place",
      "name": "Chokli"
    },
    {
      "@type": "Place",
      "name": "Matool"
    },
    {
      "@type": "Place",
      "name": "Ponniam"
    },
    {
      "@type": "Place",
      "name": "Kannapuram"
    },
    {
      "@type": "Place",
      "name": "Chavassery"
    },
    {
      "@type": "Place",
      "name": "Madayi"
    },
    {
      "@type": "Place",
      "name": "Padannakkad"
    },
    {
      "@type": "Place",
      "name": "Cheemeni"
    },
    {
      "@type": "Place",
      "name": "Karivellur"
    },
    {
      "@type": "Place",
      "name": "Ezhimala"
    }
  ],
  "foundingLocation": {
    "@type": "Place",
    "name": "Payyannur"
  },
  "founder": {
    "@type": "Person",
    "name": "Anuprasad",
    "sameAs": "https://www.facebook.com/ramu.prasad.921"
  }
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
        <meta name="description" content={desc} />
        <meta name="keywords" content="kalyana,mandapa,catering,service,provider,decoration,lights,music,stage,balloon,panthal,tent" />
        <script type='application/ld+json'>{structuredJSON}</script>

        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={desc} />
        <meta property="og:image" content={logo} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={url} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={desc} />
        <meta property="twitter:image" content={logo} />
      </Head>
      <div className="App">
        <div className="App-hc">
          <div className="stripes"></div>
          <header className={"App-header" + (showMenu ? ' open' : '')}>
            <div className="lead">
              <div className="wttl">
                <Link to="/">{title}</Link>
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
              <a href={'https://wa.me/91' + phone} className="wa">
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

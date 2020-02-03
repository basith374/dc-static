import React, { useEffect } from 'react'
import { Link } from 'components/Router'
import { Head } from 'react-static';
import { title, phone } from '../App';
import places from '../places.json';
import events from '../events.json';

function image(path) {
  return {backgroundImage: 'url(\'https://s3.ap-south-1.amazonaws.com/thedcevents.com/assets/' + path + '\')'};
}

function Card(props) {
  let event = events[props.name];
  return <Link to={event.slug}>
    <div className="plc" style={image(event.img)}>
      <h1>{event.name}</h1>
    </div>
  </Link>
}

const logo = 'https://s3.ap-south-1.amazonaws.com/thedcevents.com/assets/logo_large.png';
const url = 'https://thedcevents.com';
const desc = 'DC Events is an event management company located in Payyannur. We undertake all kinds events like weddings, birthday celebrations, corporate & college events.'

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
  "areaServed": places.map(p => ({
    "@type": "Place",
    "name": p.name
  })),
  "foundingLocation": {
    "@type": "Place",
    "name": "Payyannur"
  },
  "foundingDate": "2019-06-18",
  "founder": {
    "@type": "Person",
    "name": "Anuprasad",
    "sameAs": "https://www.facebook.com/ramu.prasad.921"
  }
})

export default () => {
  return <div className="Home">
    <Head>
      <title>DC Events - Event Management Company in Payyanur, Kannur</title>
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
    <div className="landing" style={image('event.jpeg')}>
      <Link to="/contact">HOST AN EVENT</Link>
    </div>
    <div className="events">
      <div className="ttl">Events</div>
      <div className="plr">
        <Card name="birthday" />
        <Card name="wedding" />
        <Card name="corporate" />
      </div>
      <div className="plr">
        <Card name="college" />
      </div>
    </div>
    <div className="services">
      <div className="ttl">Services</div>
      <div className="plr">
        <Card name="mandapam" />
        <Card name="costumes" />
        <Card name="lights" />
      </div>
      <div className="plr">
        <Card name="music" />
        <Card name="decor" />
        <Card name="catering" />
      </div>
    </div>
    <div id="map">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.1002592174123!2d75.20194201521159!3d12.105288491428334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba46d3e7740be93%3A0x7ef5049d4823174e!2sDC%20events!5e0!3m2!1sen!2sin!4v1580591762589!5m2!1sen!2sin" width="100%" height="100%" frameBorder="0" style={{border: 0}} allowFullScreen=""></iframe>
    </div>
    <div className="footer">
      <div className="footer-in">
        <div className="f-l">
          <div className="hd">Locations served</div>
          {places.filter(p => p.home).map(p => {
            let name = p.name;
            return <div key={p.name}><Link to={'/find/event-managers-in-' + name.toLowerCase()}>{name}</Link></div>
          })}
        </div>
        <div className="f-r">
          <div className="hd">Contact</div>
          <div>
            <a href={'tel:+91' + phone}>{phone}</a>
          </div>
          <div>
            <a href="mailto:dcevents@gmail.com">dcevents@gmail.com</a>
          </div>
          <div className="social">
            <a href="https://www.facebook.com/DC-events-340798790145828/" className="fb">
              <div></div>
            </a>
            <a href="https://www.instagram.com/dc_eventz/" className="in">
              <div></div>
            </a>
          </div>
          <div className="closer">
            <div><img src={'https://s3.ap-south-1.amazonaws.com/thedcevents.com/assets/logo.png'} alt="payyannur event managers" /></div>
            <small>&copy; 2020 D Company</small>
          </div>
        </div>
      </div>
    </div>
  </div>
}

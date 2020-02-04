import React from 'react'
import { Link } from 'components/Router'
import { Head } from 'react-static';
import { getPlaces, url, title, desc, phone, logo, jsonLD, email, backgroundImage, logo_foot } from '../common';
import Card from '../containers/Card';
import social from '../social.json';
import Header from '../containers/Header';

export default () => {
  const SocialLink = (props) => {
    return <a href={social[props.type].url} className={props.type}><div></div></a>
  }
  return <div>
    <Head>
      <title>DC Events - Event Management Company in Payyanur, Kannur</title>
      <meta name="description" content={desc} />
      <meta name="keywords" content="kalyana,mandapa,catering,service,provider,decoration,lights,music,stage,balloon,panthal,tent" />
      <script type='application/ld+json'>{JSON.stringify(jsonLD)}</script>

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
    <Header large />
    <div className="Home">
      <div className="landing" style={backgroundImage('event.jpeg')}>
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
            {getPlaces('home').map(p => {
              let name = p.name;
              return <div key={p.name}><Link to={'/find/event-managers-in-' + name.toLowerCase()}>{name}</Link></div>
            })}
            <div><Link to="/areas-served">More...</Link></div>
          </div>
          <div className="f-r">
            <div className="hd">Contact</div>
            <div>
              <a href={'tel:+91' + phone}>{phone}</a>
            </div>
            <div>
              <a href={'mailto:' + email}>dcevents@gmail.com</a>
            </div>
            <div className="social">
              <SocialLink type="fb" />
              <SocialLink type="in" />
            </div>
            <div className="closer">
              <div><img src={logo_foot} alt="payyannur event managers" /></div>
              <small>&copy; 2020 D Company</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
}

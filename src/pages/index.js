import React, { useEffect } from 'react'
import { Link } from 'components/Router'
import { Head } from 'react-static';
import { loadJS } from '../App';
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
      <div>{event.name}</div>
    </div>
  </Link>
}

export default () => {
  useEffect(() => {
    loadJS();
    setTimeout(() => {
      document.getElementById('map').innerHTML = '';
      let map = window.L.map('map', {scrollWheelZoom: false, dragging: false}).setView([12.104083, 75.203500], 14);
      window.L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        accessToken: 'pk.eyJ1IjoiYmFzaXRoa3VuaW1hbCIsImEiOiJjaXJvdTNsaGIwZDR2ZmFtNnlzcnhzYmxtIn0.ycqG1O0DhIMfKcsLacSbeg'
      }).addTo(map);
      window.L.marker([12.104083, 75.203500]).addTo(map)
          .bindPopup('DC Events Office Payyanur.')
    }, 1000)
  }, [])
  return <div className="Home">
    <Head>
      <title>{title}</title>
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
    <div id="map"></div>
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

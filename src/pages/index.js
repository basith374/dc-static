import React, { useEffect } from 'react'
import { Link } from 'components/Router'
import { Head } from 'react-static';
import { loadJS } from '../App';

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
  let image = (path) => {
    return {backgroundImage: 'url(\'https://s3.ap-south-1.amazonaws.com/thedcevents.com/assets/' + path + '\')'};
  }
  return <div className="Home">
    <Head>
      <title>DC Events</title>
    </Head>
    <div className="landing" style={image('event.jpeg')}>
      <Link to="/contact">HOST AN EVENT</Link>
    </div>
    <div className="events">
      <div className="ttl">Events</div>
      <div className="plr">
        <Link to="/birthday-celebrations">
          <div className="plc" style={image('birthday.jpg')}>
            <div>Birthday Celebrations</div>
          </div>
        </Link>
        <Link to="/weddings">
          <div className="plc" style={image('wedding.jpg')}>
            <div>Weddings</div>
          </div>
        </Link>
        <Link to="/corporate-events">
          <div className="plc" style={image('corporate.jpg')}>
            <div>Corporate Events</div>
          </div>
        </Link>
      </div>
      <div className="plr">
        <Link to="/college-events">
          <div className="plc" style={image('college.jpg')}>
            <div>College Events</div>
          </div>
        </Link>
      </div>
    </div>
    <div className="services">
      <div className="ttl">Services</div>
      <div className="plr">
        <Link to="/mandapam">
          <div className="pdc" style={image('mandapa.jpg')}>
            <div>Mandapam</div>
          </div>
        </Link>
        <Link to="/costumes">
          <div className="pdc" style={image('costume.jpg')}>
            <div>Costumes</div>
          </div>
        </Link>
        <Link to="/lights">
          <div className="pdc" style={image('lights.jpeg')}>
            <div>Lights</div>
          </div>
        </Link>
      </div>
      <div className="plr">
        <Link to="/music">
          <div className="pdc" style={image('music.jpg')}>
            <div>Music &amp; DJ</div>
          </div>
        </Link>
        <Link to="/decor">
          <div className="pdc" style={image('decoration.jpg')}>
            <div>Decor</div>
          </div>
        </Link>
        <Link to="/catering">
          <div className="pdc" style={image('catering.jpg')}>
            <div>Catering</div>
          </div>
        </Link>
      </div>
    </div>
    <div id="map"></div>
    <div className="footer">
      <div className="footer-in">
        <div className="f-l">
          <div className="hd">Locations served</div>
          <div><Link to="/find/event-managers-in-payyannur">Payyannur</Link></div>
          <div><Link to="/find/event-managers-in-taliparamba">Taliparamba</Link></div>
          <div><Link to="/find/event-managers-in-kannur">Kannur</Link></div>
          <div><Link to="/find/event-managers-in-thalassery">Thalassery</Link></div>
          <div><Link to="/find/event-managers-in-mahe">Mahe</Link></div>
        </div>
        <div className="f-r">
          <div className="hd">Contact</div>
          <div>
            <a href="tel:+919526696669">9526696669</a>
          </div>
          <div>
            <a href="mailto:dcevents@gmail.com">dcevents@gmail.com</a>
          </div>
          <div className="social">
            <a href="https://www.facebook.com/DC-events-340798790145828/" className="fb">
              <div></div>
            </a>
            <a href="https://wa.me/919526696669" className="wa">
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

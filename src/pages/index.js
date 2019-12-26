import React, { useEffect } from 'react'
import { Link } from 'components/Router'

export default () => {
  useEffect(() => {
    let mapCb = () => {
      let el = document.getElementById('map');
      if(el) new window.google.maps.Map(document.getElementById('map'), {
        center: {lat: 12.104083, lng: 75.203500},
        zoom: 12,
      });
    }
    if(window.google) mapCb();
    else window.initMap = mapCb;
  })
  let image = (path) => {
    return {backgroundImage: 'url(\'https://s3.ap-south-1.amazonaws.com/thedcevents.com/assets/' + path + '\')'};
  }
  return <div className="Home">
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
          <div><Link to="/event-managers-in-payyannur">Payyannur</Link></div>
          <div><Link to="/event-managers-in-thalassery">Thalassery</Link></div>
          <div><Link to="/event-managers-in-kannur">Kannur</Link></div>
          <div><Link to="/event-managers-in-mahe">Mahe</Link></div>
        </div>
        <div className="f-r">
          <div className="hd">Contact</div>
          <div>9526696669</div>
          <div>dcevents@gmail.com</div>
        </div>
      </div>
    </div>
  </div>
}

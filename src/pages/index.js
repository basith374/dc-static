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
  return <div className="Home">
    <div className="landing">
      <Link to="/contact">HOST AN EVENT</Link>
    </div>
    <div className="events">
      <div className="ttl">Events</div>
      <div className="plr">
        <Link to="/birthday-celebrations">
          <div className="plc b-1">
            <div>Birthday Celebrations</div>
          </div>
        </Link>
        <Link to="/weddings">
          <div className="plc b-2">
            <div>Weddings</div>
          </div>
        </Link>
        <Link to="/corporate-events">
          <div className="plc b-3">
            <div>Corporate Events</div>
          </div>
        </Link>
      </div>
      <div className="plr">
        <Link to="/college-events">
          <div className="plc b-4">
            <div>College Events</div>
          </div>
        </Link>
      </div>
    </div>
    <div className="services">
      <div className="ttl">Services</div>
      <div className="plr">
        <Link to="/mandapam">
          <div className="pdc b-6">
            <div>Mandapam</div>
          </div>
        </Link>
        <Link to="/costumes">
          <div className="pdc b-7">
            <div>Costumes</div>
          </div>
        </Link>
        <Link to="/lights">
          <div className="pdc b-8">
            <div>Lights</div>
          </div>
        </Link>
      </div>
      <div className="plr">
        <Link to="/music">
          <div className="pdc b-9">
            <div>Music &amp; DJ</div>
          </div>
        </Link>
        <Link to="/decor">
          <div className="pdc b-10">
            <div>Decor</div>
          </div>
        </Link>
        <Link to="/catering">
          <div className="pdc b-5">
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

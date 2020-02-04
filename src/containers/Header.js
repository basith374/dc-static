import React, { useState } from 'react';
import { title } from '../common';
import { Link } from 'components/Router'

export default (props) => {
    let [showMenu, setShowMenu] = useState(false);
    let toggleMenu = e => {
      setShowMenu(!showMenu);
    }
    let hideMenu = e => setShowMenu(false);
    let header = (
        <div className="App-hc">
          <header className={"App-header" + (showMenu ? ' open' : '')}>
            <div className="lead">
              {!props.large && <div className="wttl">
                <Link to="/" onClick={hideMenu}>{title}</Link>
              </div>}
            </div>
            <div className="ham">
              <button onClick={toggleMenu}><img src={require('../menu.svg')} width="32" /></button>
            </div>
            <div className="trail">
              <Link to="/contact" onClick={hideMenu}>Contact</Link>
              <Link to="/photos" onClick={hideMenu}>Photos</Link>
              <Link to="/about" onClick={hideMenu}>About</Link>
            </div>
          </header>
          {!props.large && <div className="stripes"></div>}
        </div>
    )
    return <div className={'h-c' + (props.large ? ' h-l' : '')}>
        {header}
        {props.large && <img src="https://s3.ap-south-1.amazonaws.com/thedcevents.com/assets/dcevents.png" className="logo" />}
        {props.large && <div className="mlm"><h1>The Event Planners</h1></div>}
    </div>
}
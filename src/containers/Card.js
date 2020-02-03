import React from 'react';
import { Link } from 'components/Router'
import { backgroundImage, getEvent } from "../common";

export default (props) => {
    let event = getEvent(props.name);
    return <Link to={event.slug}>
      <div className="plc" style={backgroundImage(event.img)}>
        <h1>{event.name}</h1>
      </div>
    </Link>
}
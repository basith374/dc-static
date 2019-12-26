import React from 'react';

export default (props) => {
    return <img src={'https://s3.ap-south-1.amazonaws.com/thedcevents.com/assets/' + props.src} alt={props.name} />
}
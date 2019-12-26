import React from 'react';

export default (props) => {
    let src = process.env.AWSURL ? process.env.AWSURL + props.path : require('../../public' + props.path);
    return <img src={src} />
}
import React from 'react';

let photos = [
    'birthday.jpg',
    'catering.jpg',
    'college.jpg',
    'corporate.jpg',
    'costume.jpg',
    'decoration.jpg',
    'event.jpeg',
    'lights.jpeg',
    'mandapa.jpg',
    'music.jpg',
    'wedding.jpg',
]

export default () => {
    return (
        <div className="Photos">
            {[...Array(18).keys()].map(f => {
                let idx = f * 3;
                let max = photos.length - 1;
                return <div className="phr" key={f}>
                    <div className="phd"><Image src={'/assets/' + photos[idx % max]} /></div>
                    <div className="phd"><Image src={'/assets/' + photos[(idx + 1) % max]} /></div>
                    <div className="phd"><Image src={'/assets/' + photos[(idx + 2) % max]} /></div>
                </div>
            })}
        </div>
    )
}
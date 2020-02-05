import events from './events.json';
import places from './places.json';
import social from './social.json';

export const title = 'DC Events';
export const phone = '9526696669';
export const email = 'thedceventz@gmail.com';
export const logo = 'https://s3.ap-south-1.amazonaws.com/thedcevents.com/assets/logo_large.png';
export const logo_foot = 'https://s3.ap-south-1.amazonaws.com/thedcevents.com/assets/logo.png';
export const url = 'https://thedcevents.com';
export const desc = 'DC Events is an event management company located in Payyannur. We undertake all kinds events like weddings, birthday celebrations, corporate & college events.'
export const asset_path = 'https://s3.ap-south-1.amazonaws.com/thedcevents.com/assets/';

export const getEvents = (type) => {
    let list = Object.values(events);
    if(type === 'routes') {
        return list.filter(e => e.name && e.slug && e.tags && e.img);
    } else if(type === 'photos') {
        return list.filter(e => e.img && e.tags);
    }
    return list;
}

export const getEvent = (type) => {
    return events[type] || {name: 'Event', desc: desc, img: 'event.jpeg', tags: 'event management'};
}

export const getPlaces = (type) => {
    let list = places;
    if(type === 'home') return list.filter(e => e.home);
    return list;
}

export const getSocial = (type) => {
    let list = Object.values(social);
    if(type === 'link') return list.filter(s => s.url);
    return list;
}

export const jsonLD = {
    "@context": "http://www.schema.org",
    "@type": "ProfessionalService",
    "name": title,
    "url": url,
    "logo": logo,
    "image": logo,
    "address": {
        "@type": "PostalAddress",
        "addressLocality": "Payyannur",
        "addressRegion": "Kerala, Kannur",
        "postalCode": "670307",
        "addressCountry": "India"
    },
    "telephone": '+91' + phone,
    "email": email,
    "priceRange": "$",
    "areaServed": places.map(p => ({
        "@type": "Place",
        "name": p.name
    })),
    "foundingLocation": {
        "@type": "Place",
        "name": "Payyannur"
    },
    "foundingDate": "2019-06-18",
    "founder": {
        "@type": "Person",
        "name": "Anuprasad",
        "sameAs": "https://www.facebook.com/ramu.prasad.921"
    },
    "sameAs": getSocial('link').map(f => f.url)
}

export const backgroundImage = (path) => {
    return {backgroundImage: 'url(\'' + asset_path + path + '\')'};
}
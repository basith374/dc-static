import path from 'path'
import places from './src/places.json';
import events from './src/events.json';

export default {
  getRoutes: async () => {
    return [
      {
        path: '/thank-you',
        noindex: true
      },
      ...places.map(place => ({
        path: '/find/event-managers-in-' + place.name.toLowerCase().replace(/\s/, '-'),
        template: 'src/containers/Place',
        getData: () => ({
          place
        })
      })),
      ...Object.values(events).filter(e => e.name).map(event => ({
        path: event.slug,
        template: 'src/containers/Event',
        getData: () => ({
          event
        })
      }))
    ]
  },
  plugins: [
    [
      require.resolve('react-static-plugin-source-filesystem'),
      {
        location: path.resolve('./src/pages'),
      },
    ],
    require.resolve('react-static-plugin-reach-router'),
    require.resolve('react-static-plugin-sitemap'),
    [
      'react-static-plugin-google-tag-manager',
      { id: 'UA-80054129-8' }
    ]
  ],
}

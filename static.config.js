import path from 'path'
import { getPlaces, getEvents } from './src/common.js';

export default {
  siteRoot: 'https://thedcevents.com',
  getRoutes: async () => {
    return [
      {
        path: '/thank-you',
        noindex: true
      },
      ...getPlaces().map(place => ({
        path: '/find/event-managers-in-' + place.name.toLowerCase().replace(/\s/, '-'),
        template: 'src/containers/Place',
        getData: () => ({
          place
        })
      })),
      ...getEvents('routes').map(event => ({
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
  ],
}

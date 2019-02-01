import riot from 'riot'

// import mapboxgl from 'mapbox-gl'
import mapboxgl from 'mapbox-gl'

const html = `
  <div id="map"></div>
`

riot.tag('map', html, function(opts) {
  const tag = this,
        root = tag.root

  mapboxgl.accessToken = 'pk.eyJ1IjoiYnJhbmRvbmJ1dHRhcnNmb3J0ZW0iLCJhIjoiY2pvZzAyNTNiMDl4azNxcWhwNWh4ZDBtaiJ9.5ebIfzM262wJoUfFraOHXA'

  tag.on('mount', () => {
    let map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/brandonbuttarsfortem/cjog061xj0d1q2rt6dajtglrt',
      center: [-111.767859, 40.353972],
      zoom: 18.0
    })

    map.addControl(new mapboxgl.NavigationControl());
  })
})

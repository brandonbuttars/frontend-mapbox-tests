import riot from 'riot'

import './components/map'

riot.settings.skipAnonymousTags = true
riot.settings.brackets = '{{ }}'
document.addEventListener('DOMContentLoaded', () => riot.mount('*'))

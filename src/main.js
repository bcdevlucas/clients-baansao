// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import VueImg from 'v-img';

//import Cloudinary from 'cloudinary-vue';

import DefaultLayout from '~/layouts/Default.vue';

import '~/assets/scss/style.scss';
import '~/assets/css/style.css';
import '~/assets/scss/site.scss';
import '~/assets/fonts/icomoon/style.css';

export default function (Vue, { router, head, isClient }) {
  // head.link.push({ rel: 'stylesheet', href: 'https://unpkg.com/ace-css/css/ace.min.css' });
  head.link.push({ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Nunito+Sans:200,300,400,700,900' });
  head.link.push({ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Shadows+Into+Light' });
  head.link.push({ rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' });
  // Set default layout as a global component
  const vueImgConfig = {
    // Use `alt` attribute as gallery slide title
    altAsTitle: false,
    // Display 'download' button near 'close' that opens source image in new tab
    sourceButton: false,
    // Event listener to open gallery will be applied to <img> element
    openOn: 'click',
    // Show thumbnails for all groups with more than 1 image
    thumbnails: true,
  };

  Vue.use(VueImg, vueImgConfig);

  if (typeof window !== 'undefined') {
    const VueNumberInput = require('@chenfengyuan/vue-number-input');
    Vue.component(VueNumberInput.name, VueNumberInput);

    const Cloudinary = require('cloudinary-vue');

    Vue.use(Cloudinary, {
      configuration: {
        cloudName: 'baansaowanee'
      },
      components: ['CldImage']
    });

    Vue.component('CldImage', Cloudinary.CldImage);
  }

  if (typeof window !== 'undefined') {
    //const VueWaypoint = require('vue-waypoint');
    const VueGoogleMaps = require('vue2-google-maps');

    //Vue.use(VueWaypoint.default);
    Vue.use(VueGoogleMaps, {
      load: {
        key: 'AIzaSyBSDlMWErr_gwT5d5wze8oK9muKPuHLtKQ',
        libraries: 'places', // This is required if you use the Autocomplete plugin
        // OR: libraries: 'places,drawing'
        // OR: libraries: 'places,drawing,visualization'
        // (as you require)

        //// If you want to set the version, you can do sTo:
        // v: '3.26',
      },

      //// If you intend to programmatically custom event listener code
      //// (e.g. `this.$refs.gmap.$on('zoom_changed', someFunc)`)
      //// instead of going through Vue templates (e.g. `<GmapMap @zoom_changed="someFunc">`)
      //// you might need to turn this on.
      // autobindAllEvents: false,

      //// If you want to manually install components, e.g.
      //// import {GmapMarker} from 'vue2-google-maps/src/components/marker'
      //// Vue.component('GmapMarker', GmapMarker)
      //// then disable the following:
      // installComponents: true,
    });
  }

  Vue.component('Layout', DefaultLayout);
}

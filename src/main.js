// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import VueImg from 'v-img';
//import Cloudinary from 'cloudinary-vue';

import DefaultLayout from '~/layouts/Default.vue';

import '~/assets/scss/style.scss';
import '~/assets/css/style.css';
import '~/assets/css/site.css';
import '~/assets/fonts/icomoon/style.css';

//console.log(Cloudinary);

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
    const Cloudinary = require('cloudinary-vue');

    Vue.use(Cloudinary, {
      configuration: {
        cloudName: 'baansaowanee'
      },
      components: ['CldImage']
    });

    Vue.component('CldImage', Cloudinary.CldImage);
  }

  Vue.component('Layout', DefaultLayout);
}

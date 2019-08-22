<template>
  <div class="google-map-cutout">
    <div class="map-container">
      <GmapMap
        ref="mapRef"
        class="gmap-map"
        :center="gmapCenter"
        :zoom="16"
        map-type-id="terrain"
        style="width: 100%; height: 100%"
        :options="gmapOptions"
      >
      </GmapMap>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="420px" height="460px" class="gmap-cutout-svg">
      <clipPath id="gmap-cutout-svg-mask">
        <!--<circle cx="210" cy="210" r="210" />-->
        <rect width="420" height="460" />
      </clipPath>
      <!--<circle cx="210" cy="210" r="210" />-->
      <rect width="420" height="460" />
    </svg>
  </div>
</template>

<script>
  import { gmapApi } from 'vue2-google-maps';

  export default {
    data: () => ({
      gmapCenter: {
        lat: 9.5630,
        lng: 100.0052
      },
      gmapOptions: {
        zoomControl: true,
        mapTypeControl: false,
        scaleControl: true,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: false,
        gestureHandling: 'none'
      },
      gmapEl: null
    }),
    computed: {
      google: gmapApi
    },
    methods: {
      initializeMap() {
        this.$refs.mapRef.$mapPromise.then((gmap) => {
          const marker = new this.google.maps.Marker({
            map: gmap,
            position: gmap.getCenter()
          });

          //this.gmapEl = gmap.getDiv();
        });
      },
    },
    mounted() {
      // At this point, the child GmapMap has been mounted, but the map has not been initialized...
      // Therefore we need to write mapRef.$mapPromise.then(() => ...)
      if (typeof window !== 'undefined') {
        this.initializeMap();
      }
    }
  }
</script>

<style lang="scss">
  @mixin clip-path($clip) {
    -webkit-clip-path: url($clip);
    -moz-clip-path: url($clip);
    -ms-clip-path: url($clip);
    clip-path: url($clip);
  }

  .google-map-cutout {
    overflow: hidden;
  }

  .gmap-cutout-svg {
    border: 1px solid #eee;
  }

  .map-container {
    @include clip-path(#gmap-cutout-svg-mask);

    .gm-style > div:nth-child(2) {
      bottom: 30px !important;
      left: 195px !important;

      &:div div {
        cursor: default;
      }
    }
  }

  .gmap-map {
    position: absolute;
    width: 500px;
    height: 500px;
    bottom: 0;
    z-index: 10;
  }

  @media screen and (max-width: 84em) {
    .google-map-cutout {
      display: none;
    }
  }
</style>

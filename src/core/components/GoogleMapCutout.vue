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
        <rect width="420" height="460" />
      </clipPath>
      <rect width="420" height="460" />
    </svg>
  </div>
</template>

<script>
  import { Map as GmapMap, gmapApi } from 'vue2-google-maps';

  export default {
    components: {
      GmapMap
    },
    data: () => ({
      gmapCenter: {
        lat: 9.5630,
        lng: 100.0052
      },
      gmapOptions: {
        infoWinOpen: false,
        zoomControl: true,
        mapTypeControl: false,
        scaleControl: true,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: false,
        //gestureHandling: 'none'
      },
      gmapEl: null,
      gmap: null
    }),
    computed: {
      google: gmapApi
    },
    methods: {
      initializeMap() {
        this.$refs.mapRef.$mapPromise.then((gmap) => {
          this.gmap = gmap; // Just set we don't need this to be reactive
          /*const marker = new this.google.maps.Marker({
            map: gmap,
            position: gmap.getCenter()
          });*/

          const request = {
            location: gmap.getCenter(),
            radius: '500',
            query: '25/1 Moo 1 Maenam, Koh Samui 84330'
          };

          const service = new this.google.maps.places.PlacesService(gmap);
          service.textSearch(request, this.placeMarker);

          //this.gmapEl = gmap.getDiv();
        });
      },
      // Checks that the PlacesServiceStatus is OK, and adds a marker
      // using the place ID and location from the PlacesService.
      placeMarker(results, status) {
        if (status === this.google.maps.places.PlacesServiceStatus.OK) {
          const marker = new this.google.maps.Marker({
            map: this.gmap,
            place: {
              placeId: results[0].place_id,
              location: results[0].geometry.location
            }
          });

          const newCenter = {
            lat: results[0].geometry.location.lat() - 0.006, // Offset for map pos
            lng: results[0].geometry.location.lng()
          };

          this.$set(this, 'gmapCenter', newCenter);
        }
      }
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

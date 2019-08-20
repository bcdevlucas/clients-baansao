<template>
  <div class="google-map-cutout">
    <div class="map-container">
      <GmapMap
        class="gmap-map"
        :center="{lat:9.5630, lng:100.0052}"
        :zoom="16"
        map-type-id="terrain"
        style="width: 100%; height: 100%"
        :options="this.gmapOptions"
      >
      </GmapMap>
      <!--<GmapMarker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        :clickable="true"
        :draggable="true"
        @click="center=m.position"
      />-->
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
  export default {
    data: () => ({
      gmapOptions: {
        zoomControl: false,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: false,
        //gestureHandling: 'none'
      }
    })
  }
</script>

<style lang="scss">
  @mixin clip-path($clip) {
    -webkit-clip-path: url($clip);
    -moz-clip-path: url($clip);
    -ms-clip-path: url($clip);
    clip-path: url($clip);
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

<template>
  <div v-bind:class="classNameString">
    <div class="property-album-inner content-block-inner">
      <!--<a v-if="showStaticImage" @click="linkClicked" class="d-block content-block-image figure">
        <img
          :src="this.image"
          alt="Image"
          class="img-fluid"
        />
      </a>-->
      <a @click="linkClicked" class="d-block content-block-image">
        <div class="photo-stack">
          <img
            v-if="this.cloudImage && this.cloudImage.src"
            :src="this.cloudImage.src"
            alt="Image"
            class="img-fluid"
          />
          <span class="img-fluid"></span>
          <span class="img-fluid"></span>
          <span class="img-fluid"></span>
          <span class="img-fluid"></span>
        </div>
      </a>
      <div class="content-block-content">
        <h3 class="mb-4">
          <a @click="linkClicked" v-bind:href="this.link" v-bind:aria-label="this.linkText">{{ this.title }}</a>
          <span class="content-block-price">{{ priceAtFormatted(0) }} <small>USD<br />per night</small></span>
        </h3>
        <p v-if="typeof this.datePublished === 'string' && this.datePublished.length > 0" class="text-muted">
          {{ this.datePublished }} - Bob Johnson
        </p>
        <p v-if="typeof this.description === 'string' && this.description.length > 0" class="text-muted" v-html="compiledDescription"></p>
        <p v-if="typeof this.linkText === 'string' && this.linkText.length > 0">
          <a @click="linkClicked" v-bind:href="this.link" v-bind:aria-label="this.linkText" class="btn btn-art-class btn-lg rounded-0"><i class="material-icons block-icon">arrow_right</i> {{ this.linkText }}</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  import ContentBlockMixin from '~/core/mixins/layouts/ContentBlock';
  import PriceMixin from '~/core/mixins/layouts/Price';

  //import ErrorBoundary from '~/core/components/ErrorBoundary.vue';

  export default {
    mixins: [
      ContentBlockMixin,
      PriceMixin
    ],
    components: {
      //ErrorBoundary
    }
  };
</script>

<style lang="scss">
  .property-album-inner {
    &.content-block-inner {
      border: none !important;
      box-shadow: none !important;
      background: transparent;
    }
  }

  .content-block-image {
    cursor: pointer !important;

    img {
      cursor: pointer !important;
    }
  }

  .blog-post,
  .post-entry,
  .project-entry {
    .content-block-inner {
      overflow: hidden;
      position: relative;
      padding: 1rem 1rem 0;
      border: 1px solid lightgrey;
      box-shadow: 0px 1px 2px rgba(10,10,10,0.15);
    }
  }

  .content-block-price {
    float: right;
    font-size: 130%;
    line-height: 1rem;

    small {
      font-size: 0.8rem;
      display: inline-block;
      line-height: 0.6rem;
    }
  }

  @media screen and (max-width: 40em) {
    .content-block-price {
      //position: absolute;
      //top: 0;
      //right: 15px;
      //top: 10px;
      background: rgba(255,255,255,0.7);
      padding: 10px 5px;
      float: none !important;
      display: block !important;
    }
  }

  .photo-stack .img-fluid {
    position: absolute;
    top: 0;
    left: 0;
    border: 1px solid white;
    box-shadow: 0 1px 3px -2px rgba(0,0,0,.5);
    transition: all 0.3s ease-out;
    width: 100%;
    height: 100%;
    background: rgba(22,22,22,0.25);
    border: 1px solid grey;
  }
  .photo-stack .img-fluid:nth-child(1) {
    z-index: 999;
  }
  .photo-stack .img-fluid:nth-child(2) {
    transform: rotate3d(0,0,1,3deg);
  }
  .photo-stack .img-fluid:nth-child(3) {
    transform: rotate3d(0,0,1,-3deg);
  }
  .photo-stack .img-fluid:nth-child(4) {
    transform: rotate3d(0,0,1,2deg);
  }

  /*.photo-stack:hover .img-fluid:nth-child(1) {
    transform: scale(1.02);
  }
  .photo-stack:hover .img-fluid:nth-child(2) {
    transform: translate3d(10%, 0, 0) rotate3d(0,0,1,3deg);
  }
  .photo-stack:hover .img-fluid:nth-child(3) {
    transform: translate3d(-10%, 0, 0) rotate3d(0,0,1,-3deg);
  }
  .photo-stack:hover .img-fluid:nth-child(4) {
    transform: translate3d(2%, -5%, 0) rotate3d(0,0,1,2deg);
  }
  .photo-stack:hover .img-fluid:nth-child(5) {
    transform: translate3d(-5%, -2%, 0) rotate3d(0,0,1,2deg);
  }*/

  /* Mods */
  .photo-stack {
    position: relative;
    width: 100%;
    height: 300px;
    margin-bottom: 2rem;
  }
</style>

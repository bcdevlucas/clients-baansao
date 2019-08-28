<template>
  <div v-bind:class="classNameString">
    <div class="property-block-inner content-block-inner pb-3">
      <!--<a v-if="showStaticImage" @click="linkClicked" class="d-block content-block-image figure">
        <img
          :src="this.image"
          alt="Image"
          class="img-fluid"
        />
      </a>-->
      <a @click="linkClicked" class="d-block content-block-image">
        <img
          v-if="this.cloudImage && this.cloudImage.src"
          :src="this.cloudImage.src"
          alt="Image"
          class="img-fluid"
        />
      </a>
      <div class="content-block-content">
        <h3 class="mb-2">
          <a @click="linkClicked" v-bind:href="this.link" v-bind:aria-label="this.linkText">{{ this.title }}</a>
          <span class="content-block-price">{{ priceAtFormatted(0) }} <small>USD<br />per night</small></span>
        </h3>
        <p v-if="typeof this.datePublished === 'string' && this.datePublished.length > 0" class="text-muted">
          {{ this.datePublished }} - Bob Johnson
        </p>
        <p v-if="typeof this.description === 'string' && this.description.length > 0" v-html="compiledDescription"></p>
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

  .content-block-image {
    overflow: hidden;
    cursor: pointer !important;
    margin-bottom: 1rem;

    img {
      cursor: pointer !important;
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

  // IMPORTANT! This 108em breakpoint (instead of the usual 102) seems to resolve
  // MacBook Pro with / without external display attached scaling...
  @media screen and (max-width: 108em) {
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
</style>

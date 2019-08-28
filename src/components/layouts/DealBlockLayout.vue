<template>
  <div v-bind:class="classNameString">
    <div class="content-block-inner">
      <a v-if="showStaticImage" @click="linkClicked" class="d-block content-block-image figure">
        <img
          :src="this.image"
          alt="Image"
          class="img-fluid"
        />
      </a>
      <a v-if="showCloudinaryImage" @click="linkClicked" class="d-block content-block-image figure">
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
          <span class="deal-block-price">{{ this.price }}</span>
        </h3>
        <p v-if="typeof this.datePublished === 'string' && this.datePublished.length > 0" class="text-muted">
          Valid Through: {{ this.datePublished }}
        </p>
        <div v-if="typeof this.description === 'string' && this.description.length > 0" v-html="compiledDescription"></div>
        <div v-if="typeof this.linkText === 'string' && this.linkText.length > 0">
          <a @click="linkClicked" v-bind:href="this.link" v-bind:aria-label="this.linkText" class="btn btn-art-class btn-lg rounded-0"><i class="material-icons block-icon">arrow_right</i> {{ this.linkText }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import ContentBlockMixin from '~/core/mixins/layouts/ContentBlock';
  import ContentBlockPriceMixin from '~/core/mixins/layouts/ContentBlockPrice';

  //import ErrorBoundary from '~/core/components/ErrorBoundary.vue';

  export default {
    mixins: [
      ContentBlockMixin,
      ContentBlockPriceMixin
    ],
    components: {
      //ErrorBoundary
    }
  };
</script>

<style lang="scss">
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
      overflow: visible;
      position: relative;
      padding: 1rem 1rem 0;
      border: 1px solid lightgrey;
      box-shadow: 0px 1px 2px rgba(10,10,10,0.15);
    }
  }

  .deal-block-price {
    float: right;
    font-size: 1.3rem;
    line-height: 1.3rem;
  }
</style>

<template>
  <div v-bind:class="classNameString">
    <error-boundary>
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
          <h3 class="mb-0">
            <a @click="linkClicked" v-bind:href="this.link" v-bind:aria-label="this.linkText">{{ this.title }}</a>
          </h3>
          <p v-if="typeof this.datePublished === 'string' && this.datePublished.length > 0" class="text-muted">
            {{ this.datePublished }} - Bob Johnson
          </p>
          <div v-if="typeof this.description === 'string' && this.description.length > 0" class="text-muted" v-html="compiledDescription"></div>
          <div v-if="typeof this.linkText === 'string' && this.linkText.length > 0">
            <a @click="linkClicked" v-bind:href="this.link" v-bind:aria-label="this.linkText" class="btn btn-art-class btn-lg rounded-0"><i class="material-icons block-icon">arrow_right</i> {{ this.linkText }}</a>
          </div>
        </div>
      </div>
    </error-boundary>
  </div>
</template>

<script>
  import ContentBlockMixin from '~/core/mixins/layouts/ContentBlock';

  import ErrorBoundary from '~/core/components/ErrorBoundary.vue';

  export default {
    mixins: [
      ContentBlockMixin
    ],
    components: {
      ErrorBoundary
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
      overflow: hidden;
      position: relative;
      padding: 1rem 1rem 0;
      border: 1px solid lightgrey;
      box-shadow: 0px 1px 2px rgba(10,10,10,0.15);
    }
  }
</style>

<template>
  <div v-bind:class="classNameString">
    <div class="content-block-inner">
      <a v-if="typeof this.image === 'string' && this.image.length > 0" @click="linkClicked" class="d-block content-block-image figure">
        <img
          :src="this.image"
          alt="Image"
          class="img-fluid"
        />
      </a>
      <a v-if="typeof this.cloudinaryImage === 'string' && this.cloudinaryImage.length > 0" @click="linkClicked" class="d-block content-block-image figure">
        <img
          v-if="this.cloudImage && this.cloudImage.src"
          :src="this.cloudImage.src"
          alt="Image"
          class="img-fluid"
        />
      </a>
      <div class="content-block-content">
        <h3 class="mb-4">
          <a @click="linkClicked" v-bind:href="this.link" v-bind:aria-label="this.linkText">{{ this.title }}</a>
          <span class="content-block-price">{{ this.price }}</span>
        </h3>
        <p v-if="typeof this.datePublished === 'string' && this.datePublished.length > 0" class="text-muted">
          Valid Through: {{ this.datePublished }}
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
  import ContentBlockPriceMixin from '~/core/mixins/layouts/ContentBlockPrice';

  export default {
    mixins: [
      ContentBlockMixin,
      ContentBlockPriceMixin
    ]
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

  .content-block-price {
    float: right;
    font-size: 130%;
    line-height: 1rem;
  }
</style>

<template>
  <div v-bind:class="classNameString">
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
      <p v-if="typeof this.datePublished === 'string' && this.datePublished.length > 0" class="text-muted">{{ this.datePublished }}</p>
      <h3 class="mb-0">
        <a @click="linkClicked" v-bind:href="this.link" v-bind:aria-label="this.linkText">{{ this.title }}</a>
      </h3>
      <br />
      <p v-if="typeof this.description === 'string' && this.description.length > 0" class="text-muted" v-html="compiledDescription"></p>
      <p v-if="typeof this.linkText === 'string' && this.linkText.length > 0">
        <a @click="linkClicked" v-bind:href="this.link" v-bind:aria-label="this.linkText" class="btn btn-art-class btn-lg rounded-0"><i class="material-icons block-icon">arrow_right</i> {{ this.linkText }}</a>
      </p>
    </div>
  </div>
</template>

<script>
  import ContentBlockMixin from '~/core/mixins/layouts/ContentBlock';

  export default {
    mixins: [
      ContentBlockMixin
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
</style>

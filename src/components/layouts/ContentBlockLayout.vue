<template>
  <div v-bind:class="classNameString">
    <a v-if="typeof this.image === 'string' && this.image.length > 0" @click="linkClicked" class="d-block figure">
      <img
        :src="this.image"
        alt="Image"
        class="img-fluid"
      />
    </a>
    <p v-if="typeof this.datePublished === 'string' && this.datePublished.length > 0" class="text-muted">{{ this.datePublished }}</p>
    <h3 class="mb-0">
      <a @click="linkClicked" v-bind:href="this.link" v-bind:aria-label="this.linkText">{{ this.title }}</a>
    </h3>
    <br />
    <p v-if="typeof this.description === 'string' && this.description.length > 0" class="text-muted" v-html="compiledDescription"></p>
    <p v-if="typeof this.link === 'string' && this.link.length > 0">
      <a @click="linkClicked" v-bind:href="this.link" v-bind:aria-label="this.linkText" class="btn btn-art-class btn-lg rounded-0"><i class="material-icons block-icon">arrow_right</i> {{ this.linkText }}</a>
    </p>
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

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
      <a href="#">{{ this.title }}</a>
    </h3>
    <br />
    <p v-if="typeof this.description === 'string' && this.description.length > 0" class="text-muted" v-html="compiledDescription"></p>
    <p v-if="typeof this.link === 'string' && this.link.length > 0">
      <a @click="linkClicked" v-bind:href="this.link" v-bind:aria-label="this.linkText" class="btn btn-art-class btn-lg rounded-0"><i class="material-icons block-icon">arrow_right</i> {{ this.linkText }}</a>
    </p>
  </div>
</template>

<script>
export default {
  // TODO: Supply models via props??
  props: {
    className: {
      type: String,
      default: null
    },
    flipLayout: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: '',
    },
    subtitle: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    image: {
      type: String,
      default: '',
    },
    link: {
      type: String,
      default: '',
    },
    linkText: {
      type: String,
      default: '',
    },
    onLinkClicked: {
      type: Function,
      default: null,
    },
    caption: {
      type: String,
      default: '',
    },
    subCaption: {
      type: String,
      default: '',
    },
    datePublished: {
      type: String,
      default: '',
    },
  },
  computed: {
    classNameString() {
      return (typeof this.className === 'string' && this.className.length > 0) ? this.className : '';
    },
    compiledDescription() {
      // TODO: Either marked has an issue, or it can ONLY deal with markdown; this is blowing up in prod...
      return this.description;
      // return marked(this.description);
    }
  },
  methods: {
    linkClicked() {
      if (typeof this.onLinkClicked === 'function') {
        this.onLinkClicked();
      } else if (typeof this.link === 'string' && this.link.length > 0) {
        window.location = this.link;
      }
    }
  }
};
</script>

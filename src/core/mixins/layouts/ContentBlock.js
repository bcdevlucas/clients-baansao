//import marked from 'marked';

import * as ImageUtils from '~/core/utils/ImageUtils';

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
    titleAnimation: null,
    /*loopTitleAnimation: {
      type: Boolean,
      default: true
    },*/
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
    descriptionAnimation: Object,
    loopDescriptionAnimation: {
      type: Boolean,
      default: true
    },
    image: {
      type: String,
      default: '',
    },
    cloudinaryImage: {
      type: String,
      default: null,
    },
    cloudName: {
      type: String,
      default: null,
    },
    cloudFolder: {
      type: String,
      default: null,
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
    }
  },
  computed: {
    classNameString() {
      return (typeof this.className === 'string' && this.className.length > 0) ? this.className : '';
    },
    /**
     * TODO: marked doesn't seem to be SSR/pre-render compatible?
     * @returns {*}
     */
    compiledDescription() {
      return this.description;
      //return marked(this.description);
    },
    // TODO: Maybe move this to utils? And just invoke here?
    hasCloudinaryImage() {
      return typeof this.cloudinaryImage === 'string' && this.cloudinaryImage.length > 0;
    },
    hasStaticImage() {
      return typeof this.image === 'string' && this.image.length > 0;
    },
    showStaticImage() {
      if (typeof window !== 'undefined') {
        return this.hasStaticImage && !this.hasCloudinaryImage;
      }

      return true;
    }
  },
  data() {
    return {
      cloudImage: null,
      intersectionOptions: {
        root: null,
        rootMargin: '0px 0px 0px 0px',
        threshold: [0.33333]
      }
    }
  },
  methods: {
    async loadImage() {
      const image = { id: this.cloudinaryImage, src: null };

      let width = 600;
      let height = 450;

      const opts = { cloudName: this.cloudName, folder: this.cloudFolder, transforms: `w_${width},h_${height},q_60` };
      image.src = await ImageUtils.getCloudinaryImageUrl(image.id, opts);

      this.$set(this, 'cloudImage', image);
    },
    /**
     * Options:
     * @going: in, out
     * @direction: top, right, bottom, left
     *
     * Usage:
     * if (going === this.$waypointMap.GOING_IN) {
     *   console.log('waypoint going in!')
     * }
     *
     * if (direction === this.$waypointMap.DIRECTION_TOP) {
     *   console.log('waypoint going top!')
     * }
     */
    onWaypoint({ going, direction }) {
      if (going === this.$waypointMap.GOING_IN) {
        //console.log('contentblock waypoint going in!');
        if (typeof this.$refs.titleAnimationContainer !== 'undefined') {
          this.$refs.titleAnimationContainer.timeline.play();
        }

        if (typeof this.$refs.descriptionAnimationContainer !== 'undefined') {
          this.$refs.descriptionAnimationContainer.timeline.play();
        }
      }

      if (going === this.$waypointMap.GOING_OUT) {
        //console.log('contentblock waypoint going out!');
        if (typeof this.$refs.titleAnimationContainer !== 'undefined') {
          this.$refs.titleAnimationContainer.timeline.seek(0);
          this.$refs.titleAnimationContainer.timeline.pause();
        }

        if (typeof this.$refs.descriptionAnimationContainer !== 'undefined') {
          this.$refs.descriptionAnimationContainer.timeline.seek(0);
          this.$refs.descriptionAnimationContainer.timeline.pause();
        }
      }
    },
    linkClicked(el) {
      // TODO: Test to see if link works...
      if (typeof this.onLinkClicked === 'function') {
        this.onLinkClicked();
      } else if (typeof this.link === 'string' && this.link !== '') {
        window.location.href = this.link;
      }
    }
  },
  mounted() {
    if (this.cloudinaryImage) {
      this.loadImage();
    }
  }
};

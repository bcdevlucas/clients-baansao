<template>
  <div class="gallery">
    <div class="img primary-image" v-if="primaryImage" data-ref-id="primaryImage" @click="triggerGallery">
      <cld-image
        ref="thumbs_primaryImage"
        cloudName="baansaowanee"
        dpr="auto"
        width="450"
        crop="scale"
        folder="orchard-view-3br"
        version="1"
        :publicId="primaryImage"
        class="img-fluid"
      />
      <img
        ref="images_primaryImage"
        v-img:gallery
        class="full-size"
        :src="getLargeImageUrl('primaryImage')"
        alt=""
      />
    </div>
    <div class="thumbnails" v-if="gallery instanceof Array && gallery.length > 0">
      <div
        class="thumbnail-strip"
        v-for="row in numberOfRows">
        <!--<img v-img:gallery v-if="gallery" v-for="image in getGalleryImages(0, 2, true)" :src="image.src" v-bind:srcset="getImageSrcSet(image.src)" :alt="image.caption" class="img" />-->
        <div class="thumbnail-wrapper" v-for="image in getGalleryImages(...getGalleryRowSlice(row), featuredOnly)">
          <div class="thumbnail-spacer" :data-ref-id="`${image.id}`" @click="triggerGallery">
            <cld-image
              :ref="`thumbs_${image.id}`"
              cloudName="baansaowanee"
              dpr="auto"
              width="150"
              crop="scale"
              :publicId="image.id"
              folder="orchard-view-3br"
              version="1"
              :alt="image.caption"
              class="img"
            />
            <img
              :ref="`images_${image.id}`"
              v-img:gallery
              class="full-size"
              :src="getLargeImageUrl(image.id)"
              alt=""
            />
          </div>
        </div>
      </div>
      <!--<div class="thumbnail-strip" v-if="this.gallery instanceof Array">
        <img v-img:gallery v-if="gallery" v-for="image in getGalleryImages(3, 5, true)" :src="image.src" v-bind:srcset="getImageSrcSet(image.src)" :alt="image.caption" class="img" />
      </div>
      <div class="thumbnail-strip" v-if="this.gallery instanceof Array">
        <img v-img:gallery v-if="gallery" v-for="image in getGalleryImages(6, 8, true)" :src="image.src" v-bind:srcset="getImageSrcSet(image.src)" :alt="image.caption" class="img" />
      </div>
      <div class="thumbnail-strip" v-if="this.gallery instanceof Array">
        <img v-img:gallery v-if="gallery" v-for="image in getGalleryImages(9, 11, true)" :src="image.src" v-bind:srcset="getImageSrcSet(image.src)" :alt="image.caption" class="img" />
      </div>-->
    </div>
  </div>
</template>

<script>
  import * as ImageUtils from '~/core/utils/ImageUtils';

  export default {
    props: {
      primaryImage: {
        type: String,
        default: null
      },
      gallery: {
        type: Array,
        default: []
      },
      displayMax: {
        type: Number,
        default: 6
      },
      imagesPerRow: {
        type: Number,
        default: 3
      },
      featuredOnly: {
        type: Boolean,
        default: true
      }
    },
    computed: {
      numberOfRows() {
        const imagesToShow = (this.featuredOnly) ? this.gallery.filter((item) => item.featured).length : this.gallery.length;
        const displayMax = (this.displayMax > imagesToShow) ? imagesToShow : this.displayMax;
        return Math.floor(displayMax / this.imagesPerRow);
      }
    },
    methods: {
      getImageSrcSet(imagePath) {
        return ImageUtils.getImageSrcSet(imagePath);
      },
      getGalleryRowSlice(row) {
        return [row * this.imagesPerRow - this.imagesPerRow, row * this.imagesPerRow - 1];

      },
      getGalleryImages(start, end, featuredOnly) {
        let galleryImages = this.gallery instanceof Array ? this.gallery : [];
        galleryImages = (featuredOnly) ? galleryImages.filter((item) => item.featured) : galleryImages;

        start = (!isNaN(start)) ? start : 0;
        // Add 1 to end as slice doesn't count include the last item
        end = (!isNaN(end)) ? end + 1 : galleryImages.length;

        galleryImages = galleryImages.slice(start, Math.min(end, galleryImages.length));

        return galleryImages;
      },
      getLargeImageUrl(id) {
        const ref = this.$refs[`thumbs_${id}`];
        return (ref) ? (ref instanceof Array) ? this.stripImageConfigFromUrl(ref[0].$el.src) : this.stripImageConfigFromUrl(ref.$el.src) : '';
      },
      stripImageConfigFromUrl(url) {
        console.log(url.replace(/upload(\/[^\/]*\/)/, 'upload/'));
        return url.replace(/upload(\/[^\/]*\/)/, 'upload/w_1920/');
      },
      triggerGallery(e) {
        const refId = e.currentTarget.attributes['data-ref-id'].value;
        const ref = this.$refs[`images_${refId}`];

        // Not sure why the f*** this can sometimes be an array but alllllrighty then...
        if (ref instanceof Array) ref[0].click();
        else ref.click();
      }
    },
    mounted() {
      // Force update, v-img image gallery won't have the cloudinary urls on first paint!
      // TODO: Maybe there's a better way to detect this other than using a timeout...
      setTimeout(() => this.$forceUpdate(), 1000);
    }
  }
</script>

<style lang="scss">
  img.full-size {
    height: 0; /* Set to 0 so we can still trigger click */
  }

  .primary-image {
    cursor: pointer;
  }
</style>

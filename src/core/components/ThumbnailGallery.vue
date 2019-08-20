<template>
  <div class="gallery">
    <div class="img primary-image" v-if="primaryImage" :data-ref-id="primaryImage" @click="triggerGallery">
      <cld-image
        ref="thumbs_primaryImage"
        :cloudName="cloudName"
        dpr="auto"
        width="450"
        crop="scale"
        :folder="folder"
        :version="version"
        :publicId="primaryImage"
        class="img-fluid"
      />
    </div>
    <div class="featured-gallery" v-if="!displayAllImages">
      <div class="thumbnails" v-if="gallery instanceof Array && gallery.length > 0">
        <div
          class="thumbnail-strip"
          v-for="row in numberOfRows">
          <!--<img v-img:gallery v-if="gallery" v-for="image in getGalleryImages(0, 2, true)" :src="image.src" v-bind:srcset="getImageSrcSet(image.src)" :alt="image.caption" class="img" />-->
          <div class="thumbnail-wrapper" v-for="image in getGalleryImages(...getGalleryRowSlice(row), true)">
            <div class="thumbnail-spacer" :data-ref-id="`${image.id}`" @click="triggerGallery">
              <cld-image
                :ref="`thumbs_${image.id}`"
                :cloudName="cloudName"
                dpr="auto"
                width="150"
                crop="scale"
                :publicId="image.id"
                :folder="folder"
                :version="version"
                :alt="image.caption"
                class="img"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="full-gallery" v-if="displayAllImages">
      <div class="thumbnails" v-if="gallery instanceof Array && gallery.length > 0">
        <div
          class="thumbnail-strip"
          v-for="row in numberOfRows">
          <!--<img v-img:gallery v-if="gallery" v-for="image in getGalleryImages(0, 2, true)" :src="image.src" v-bind:srcset="getImageSrcSet(image.src)" :alt="image.caption" class="img" />-->
          <div class="thumbnail-wrapper" v-for="image in getGalleryImages(...getGalleryRowSlice(row), false)">
            <div class="thumbnail-spacer" :data-ref-id="`${image.id}`" @click="triggerGallery">
              <cld-image
                :ref="`thumbs_${image.id}`"
                :cloudName="cloudName"
                dpr="auto"
                width="150"
                crop="scale"
                :publicId="image.id"
                :folder="folder"
                :version="version"
                :alt="image.caption"
                class="img"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="full-images" v-if="fullSizeImages.length > 0">
      <img
        v-for="image in fullSizeImages"
        :ref="`images_${image.id}`"
        v-img:gallery
        class="full-size"
        :src="image.src"
        alt=""
      />
    </div>
    <span @click="toggleAllImages" style="text-decoration: underline; cursor: pointer">{{ displayAllImages ? 'Show Featured Images' : 'Show All Images' }}</span>
  </div>
</template>

<script>
  import * as ImageUtils from '~/core/utils/ImageUtils';

  export default {
    props: {
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
      },
      primaryImage: {
        type: String,
        default: null
      },
      cloudName: {
        type: String,
        default: null
      },
      gallery: {
        type: Array,
        default: []
      },
      version: {
        type: String,
        default: "1"
      },
      folder: {
        type: String,
        default: null
      }
    },
    data() {
      return {
        renderKey: Math.round(Math.random() * 1000),
        displayAllImages: false,
        fullSizeImages: []
      };
    },
    watch: {
      featuredOnly(newVal) {
        this.displayAllImages = !newVal;
        this.renderKey = Math.round(Math.random() * 1000);
        this.$refs.forEach(ref => {
          ref.$forceUpdate();
        })
      }
    },
    computed: {
      numberOfRows() {
        const imagesToShow = (!this.displayAllImages) ? this.gallery.filter((item) => item.featured).length : this.gallery.length;
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

        //console.log(`dumping gallery images ${start} - ${end} | featuredOnly: ${featuredOnly}`);
        //console.log(galleryImages);

        return galleryImages;
      },
      getLargeImageUrls() {
        async function asyncForEach(array, callback) {
          for (let index = 0; index < array.length; index++) {
            await callback(array[index], index, array);
          }
        }

        let fullSizeImages = [];

        asyncForEach([{ id: this.primaryImage }].concat(this.gallery), async (image) => {
          let imageUrl = await this.getLargeImageUrl(image.id);
          fullSizeImages.push({ id: image.id, src: imageUrl });
        }).then(() => {
          //console.log('setting full size image urls');
          //console.log(fullSizeImages);
          this.$set(this, 'fullSizeImages', fullSizeImages);
        });
      },
      async getLargeImageUrl(id) {
        const opts = { cloudName: this.cloudName, folder: this.folder, transforms: 'w_1920' };
        return await ImageUtils.getCloudinaryImageUrl(id, opts);
      },
      triggerGallery(e) {
        const refId = e.currentTarget.attributes['data-ref-id'].value;
        const ref = this.$refs[`images_${refId}`];

        // Not sure why the f*** this can sometimes be an array but alllllrighty then...
        if (ref instanceof Array) ref[0].click();
        else ref.click();
      },
      toggleAllImages() {
        this.$set(this, 'displayAllImages', !this.displayAllImages);
      }
    },
    mounted() {
      this.getLargeImageUrls();
    }
  }
</script>

<style lang="scss">
  img.full-size, .full-images {
    height: 0; /* Set to 0 so we can still trigger click */
  }

  .primary-image {
    cursor: pointer;
  }
</style>

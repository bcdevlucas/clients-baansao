<template>
  <Layout>
    <hero-layout01-col
      class="property-hero"
      :image="activeImage ? activeImage.src : ''"
      :title="pageData.title"
      :description="pageData.summary"
    />

    <div class="content-wrapper">
      <div class="site-section container-fluid" v-if="pageData" :key="pageData.id">
        <!--<div class="row mt-4 mb-4 pt-4">
          <div class="col-lg-12 ml-auto text-center">
            <span class="sub-title" v-html="pageData.summary"></span>
            <h2 class="font-weight-bold text-black mb-5" v-html="pageData.title"></h2>
          </div>
        </div>-->
        <div class="row mt-4 mb-4 pt-4">
          <div class="col-lg-3 mb-5 mb-lg-0">
            <div class="container">
              <thumbnail-gallery
                v-if="pageData && pageData.gallery"
                :primaryImage="pageData.imageId"
                :gallery="pageData.gallery"
                cloudName="baansaowanee"
                :folder="pageData.galleryFolder"
                :displayMax="pageData.gallery.length"
                :imagesPerRow="3"
              />
              <br />
              <h3 class="mt-4">Location</h3>
              <google-map-cutout class="mt-4" />
              <!--<h3 class="mt-4">Address</h3>-->
              <p class="mt-4">
                <span>{{ pageData.address.line1 }}</span><br />
                <span v-if="typeof pageData.address.line2 === 'string' && pageData.address.line2 !== ''">{{ pageData.address.line2 }}</span>
                <br v-if="typeof pageData.address.line2 === 'string' && pageData.address.line2 !== ''" />
                <span>{{ pageData.address.city }}</span>,&nbsp;<span>{{ pageData.address.zone }}</span><br />
                <span>{{ pageData.address.postCode }}</span>&nbsp;<span>{{ pageData.address.country }}</span>
              </p>
            </div>
          </div>

          <div class="col-lg-6 ml-auto">
            <div class="container">
              <amenities class="mt-4 mb-4" />
              <div v-html="pageData.description"></div>
              <div class="row">
                <div class="col-sm-6">
                  <rules class="mt-4" />
                </div>
                <div class="col-sm-6">
                  <cancellations class="mt-4" />
                </div>
              </div>

              <!--<div class="container pt-4" ref="bookingForm">
                <div class="row">
                  <div class="col-12 text-center">
                    <span class="sub-title">{{ pageData.title }}</span>
                    <h2 class="font-weight-bold text-black mb-5">View Available Dates</h2>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12 text-center">
                    <div class='occsn_stack' id='occsn_stack_5301_9938'></div>
                  </div>
                </div>
              </div>-->
            </div>
          </div>

          <div class="col-lg-3 mb-5 mb-lg-0">
            <div class="container">
              <availability-calendar
                class="mt-4 mb-4"
                :price="pageData.price"
              />
              <p class="class-action-buttons mt-2 text-center">
                <button class="btn btn-secondary btn-lg ask-question" style="width: 100%"><i class="material-icons">question_answer</i>
                  <span>Ask a Question</span>
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="site-section container-fluid" v-if="propertiesContent.length > 0">
        <!--<div class="container pt-4">
          <div class="row mt-4 mb-4 pt-4">
            <div class="col-lg-12 ml-auto text-center">
              <span class="sub-title">Browse Our</span>
              <h2 class="font-weight-bold text-black mb-5">{{ `${$page.property ? 'Other ' : ''}Villas` }}</h2>
            </div>
          </div>
        </div>-->
        <div class="row mt-4 mb-4 pt-4">
          <div class="col-lg-12 ml-auto text-center">
            <span class="sub-title">Something Else?</span>
            <h2 class="font-weight-bold text-black mb-5">Our Other Rentals</h2>
          </div>
        </div>
        <div class="row mx-4">
          <property-block-layout
            v-for="property in propertiesContent.slice(0,4).filter(item => item.id !== pageData.id)"
            :key="property.id"
            className="col-lg-4 col-md-4 mb-6 project-entry"
            :title="property.title"
            :description="(property.summary) ? property.summary : ''"
            :link="`/property/${property.id}`"
            linkText="View Property"
          />
          <!--
          :cloudinaryImage="property.imageId"
          cloudName="baansaowanee"
          :cloudFolder="property.galleryFolder"
          :imageAlt="property.caption"
          :prices="property.price"
          -->
        </div>
        <div class="row">
          <div class="col-12 text-center mt-5">
            <span class="sub-title">Testimonials from</span>
            <h2 class="font-weight-bold text-black mb-5">Our Friends</h2>
          </div>
        </div>
        <div class="slider row">
          <div
            v-for="testimonial in getTestimonialsByIndex(0, 3)"
            class="col-sm-4 col-lg-3"
          >
            <testimonial-block-layout
              className="testimony"
              :reviewedBy="testimonial.reviewedBy"
              :image="testimonial.image"
              :testimonial="testimonial.testimonial"
            />
            <div
              class="homepage-hero-action action-link-block text-center space-bottom">
              <!--<a class="action-link space-top g-pstyle3" href="/lucas-profile" aria-label="My Work Experience">My Work Experience</a>-->
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
  import marked from 'marked';

  import * as ImageUtils from '~/core/utils/ImageUtils';

  import HeroLayout01Col from '~/components/layouts/HeroLayout01Col.vue'
  import PropertyBlockLayout from '~/components/layouts/PropertyBlockLayout.vue';
  import ContentBlockLayout from '~/components/layouts/ContentBlockLayout.vue';
  import TestimonialBlockLayout from '~/components/layouts/TestimonialBlockLayout.vue';

  import ThumbnailGallery from '~/core/components/ThumbnailGallery.vue';
  //import GoogleMapBackground from '~/core/components/GoogleMapBackground.vue';
  import GoogleMapCutout from '~/core/components/GoogleMapCutout.vue'; // TODO: Gotta fix this, SSR blows up
  import AvailabilityCalendar from '~/components/AvailabilityCalendar.vue';
  import Amenities from '~/components/Amenities.vue';
  import Cancellations from '~/components/Cancellations.vue';
  import Rules from '~/components/Rules.vue';

  // TODO: Implement page page that provides data interface?
  import HeroMixin from '~/mixins/HeroMixin';
  import SectionMixin from '~/mixins/SectionMixin';
  import ServiceMixin from '~/core/mixins/ServiceMixin';
  import TestimonialMixin from '~/core/mixins/TestimonialMixin';

  // Import static data
  import PropertiesData from '~/data/Properties.yml';

  export default {
    components: {
      HeroLayout01Col,
      PropertyBlockLayout,
      ContentBlockLayout,
      TestimonialBlockLayout,
      ThumbnailGallery,
      //GoogleMapBackground,
      GoogleMapCutout,
      AvailabilityCalendar,
      Amenities,
      Cancellations,
      Rules
    },
    metaInfo: {
      title: "Classes"
    },
    mixins: [HeroMixin, SectionMixin, ServiceMixin, TestimonialMixin],
    data() {
      return {
        pageTitle: PropertiesData.title,
        occasionScript: null,
        activeImage: null,
        displayBookingForm: false,
        displayQuestionForm: false,
        galleryIndex: null
      }
    },
    computed: {
      pageData() {
        let address = {
          line1: '',
          line2: '',
          city: '',
          zone: '',
          country: '',
          postCode: ''
        };

        if (this.$page.property.fields.address instanceof Array) {
          address = this.$page.property.fields.address.pop() || address;
        }

        return {
          id: this.$page.property.fields.id,
          title: this.$page.property.fields.title,
          metaKeywords: this.$page.property.fields.metaKeywords,
          metaDescription: this.$page.property.fields.metaDescription,
          address: address,
          price: (this.$page.property.fields.price instanceof Array) ? this.$page.property.fields.price.pop() : this.$page.property.fields.price,
          //summary: this.$page.property.fields.summary,
          //description: this.$page.property.fields.description,
          summary: (typeof window !== 'undefined') ? marked(this.$page.property.fields.summary) : this.$page.property.fields.summary,
          description:  (typeof window !== 'undefined') ? marked(this.$page.property.fields.description) : this.$page.property.fields.description,
          image: this.$page.property.fields.image,
          imageId: this.$page.property.fields.imageId,
          gallery: this.$page.property.fields.gallery,
          galleryFolder: this.$page.property.fields.galleryFolder,
          link: this.$page.property.fields.link,
          linkText: this.$page.property.fields.linkText
        };
      },
      propertiesContent() {
        const content = this.$page.properties.edges.map(edge => {
          const data = Object.assign({ id: edge.node.id }, edge.node.fields);
          data.summary = (typeof window !== 'undefined') ? marked(data.summary) : data.summary;
          data.description = (typeof window !== 'undefined') ? marked(data.description) : data.description;
          return data;
        });

        return content;
      },
      serviceContent() {
        return PropertiesData;
      }
    },
    methods: {
      /**
       * TODO: Is this used outside of thumbnails? If so make it a mixin.
       */
      getGalleryImages(start, end, featuredOnly) {
        let galleryImages = this.pageData.gallery instanceof Array ? this.pageData.gallery : [];
        galleryImages = (featuredOnly) ? galleryImages.filter((item) => item.featured) : galleryImages;

        start = (!isNaN(start)) ? start : 0;
        // Add 1 to end as slice doesn't count include the last item
        end = (!isNaN(end)) ? end + 1 : galleryImages.length;

        galleryImages = galleryImages.slice(start, Math.min(end, galleryImages.length));

        return galleryImages;
      },
      // Fisher-Yates Shuffle - memoized
      shuffle(array) {
        let counter = array.length;

        // While there are elements in the array
        while (counter > 0) {
          // Pick a random index
          let index = Math.floor(Math.random() * counter);

          // Decrease counter by 1
          counter--;

          // And swap the last element with it
          let temp = array[counter];
          array[counter] = array[index];
          array[index] = temp;
        }

        console.log('shuffled gallery');
        console.log(array[0].src);
        //console.log(array);

        return array;
      },
      getRandomImage(images) {
        // Copy the gallery
        let copy = images.map(image => image);
        return this.shuffle(copy).shift();
      },
      async setActiveImage() {
        if (this.pageData && this.pageData.gallery instanceof Array) {
          const activeImage = this.getRandomImage(this.pageData.gallery.slice(0, 6));
          const opts = { cloudName: 'baansaowanee', folder: this.pageData.galleryFolder, transforms: 'w_1920,q_60' };
          activeImage.src = await ImageUtils.getCloudinaryImageUrl(activeImage.id, opts);
          this.$data.activeImage = activeImage;
        }
      },
      async startPrimaryImageRotation(ms) {
        ms = (!isNaN(ms)) ? ms : 10000;

        console.log('starting image rotation');

        this.primaryImageShuffler = setInterval(this.setActiveImage, ms);

        const activeImage = { id: this.pageData.imageId, src: null };
        console.log(`Starting primary image rotation: ${ activeImage.id }`);
        const opts = { cloudName: 'baansaowanee', folder: this.pageData.galleryFolder, transforms: 'w_1920,q_60' };
        activeImage.src = await ImageUtils.getCloudinaryImageUrl(activeImage.id, opts);
        this.$data.activeImage = activeImage;
      },
      stopPrimaryImageRotation() {
        if (typeof window !== 'undefined') {
          clearInterval(this.primaryImageShuffler);
        }
      },
      showBookingForm() {
        this.displayBookingForm = true;

        if (typeof window !== 'undefined') {
          window.setTimeout(() => {
            //this.$refs.bookingForm.scrollIntoView();
          }, 333);
        }
      },
      hideBookingForm() {
        this.displayBookingForm = null;
      },
      showQuestionForm() {
        this.displayQuestionForm = true;

        if (typeof window !== 'undefined') {
          window.setTimeout(() => {
            //this.$refs.questionForm.scrollIntoView();
          }, 333);
        }
      },
      hideQuestionForm() {
        this.displayQuestionForm = null;
      }
    },
    mounted() {
      if (typeof window !== 'undefined') {
        this.startPrimaryImageRotation();
      }
    },
    beforeDestroy() {
      this.stopPrimaryImageRotation();
    }
  }
</script>

<page-query>
  query Property($path: String!) {
    property: property(path: $path) {
      id
      fields {
        title
        metaKeywords
        metaDescription
        address {
          line1
          line2
          city
          zone
          country
          postCode
        }
        price {
          amount
          currency
          dateStart
          dateEnd
          name
        }
        summary
        description
        image
        imageId
        gallery {
          id
          src
          caption
          #subCaption
          featured
        }
        galleryFolder
        link
        linkText
      }
    }
    properties: allProperty {
      edges {
        node {
          id
          fields {
            title
            metaKeywords
            metaDescription
            address {
              line1
              line2
              city
              zone
              country
              postCode
            }
            price {
              amount
              currency
              dateStart
              dateEnd
              name
            }
            summary
            description
            image
            imageId
            gallery {
              id
              src
              caption
              #subCaption
              featured
            }
            galleryFolder
            link
            linkText
          }
        }
      }
    }
  }
</page-query>


<style lang="scss">
  .page-wrap {
    margin-top: 78px;
  }

  .property-hero {
    height: auto !important;
    min-height: 400px;

    .sub-text * {
      font-size: 1.3rem !important;
      text-transform: none;
    }

    .row {
      height: auto;
      min-height: 400px;
    }

    ul {
      display: none;
      align-items: center;
      justify-content: space-between;
      li {
        text-align: left;
        //list-style-type: none;
        //list-style-position: outside;
      }
    }
  }

  .btn.btn-primary.open-airbnb-page {
    width: 100%;
    background-color: #7ea602;
    border-color: #7ea602;

    span {
      margin-top: 6px;
      font-family: "Calligraffitti", sans-serif !important;
      font-weight: bold !important;
      font-size: 1.1rem;
    }

    &:hover,
    &:active,
    &:focus {
      background-color: #3d7201 !important;
      border-color: #3d7201 !important;
      color: white !important;
    }
  }

  .btn.btn-secondary.ask-question {
    width: 100%;
    background-color: #808080;
    border-color: #808080;

    span {
      margin-top: 6px;
      font-family: "Calligraffitti", sans-serif !important;
      font-weight: bold !important;
      font-size: 1.1rem;
    }
  }
</style>

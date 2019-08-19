<template>
  <Layout>
    <div class="">
      <!--<div
        v-if="$page.property && getHeroById('page-hero') !== null"
        class="site-blocks-cover inner-page text-shadow"
        :style="`background-image: url(${activeImage.src});`"
      >-->
      <div
        v-if="$page.property && getHeroById('page-hero') !== null"
        class="site-blocks-cover inner-page text-shadow"
      >
        <div class="container hero-content" ref="pageHero">
          <div class="row align-items-center justify-content-center">
            <div class="col-md-10 text-center">
              <span class="sub-text">Baan Saowanee's</span>
              <h1 v-if="$page.property">{{ $page.property.fields.title }}</h1>
              <div class="sub-text" v-html="($page.property.fields.summary) ? $page.property.fields.summary : ''"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="content-wrapper">
      <div class="site-section" v-if="$page.property" :key="$page.property.fields.id">
        <div class="container pt-4">
          <!--<div class="row mt-4 mb-4 pt-4">
            <div class="col-lg-12 ml-auto text-center">
              <span class="sub-title" v-html="$page.property.fields.summary"></span>
              <h2 class="font-weight-bold text-black mb-5" v-html="$page.property.fields.title"></h2>
            </div>
          </div>-->
          <div class="row mt-4 mb-4 pt-4">
            <div class="col-lg-4 mb-5 mb-lg-0">
              <thumbnail-gallery
                :primaryImage="$page.property.fields.imageId"
                :gallery="$page.property.fields.gallery"
                :folder="$page.property.fields.galleryFolder"
                :displayMax="24"
                :imagesPerRow="3"
              />
              <div class="amenities-table mt-4">
                <h3>Amenities</h3>
                <div class="d-flex" style="flex-flow: row wrap;">
                  <div class="amenity d-flex" style="flex: 1 2 50%">
                    <div style="flex: 0 0 40px">
                      <svg viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false"
                           style="height: 19px; width: 19px; fill: currentcolor;">
                        <path
                          d="m10.5 0a .5.5 0 0 0 -.5.5v7a .5.5 0 0 1 -.49.5h-1.51v-7.5a.5.5 0 1 0 -1 0v7.5h-1.51a.5.5 0 0 1 -.49-.5v-7a .5.5 0 1 0 -1 0v7c0 .83.67 1.5 1.49 1.5h1.51v5c0 .03.01.06.02.09a1.49 1.49 0 0 0 -1.02 1.41v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-7c0-.66-.43-1.21-1.02-1.41.01-.03.02-.06.02-.09v-5h1.51a1.5 1.5 0 0 0 1.49-1.5v-7a .5.5 0 0 0 -.5-.5zm-2.5 15.5v7a .5.5 0 0 1 -.5.5.5.5 0 0 1 -.5-.5v-7c0-.28.22-.5.5-.5s.5.22.5.5zm11.5-15.5h-2c-1.4 0-2.5 1.07-2.5 2.5v7c0 1.43 1.1 2.5 2.5 2.5h1.5v2.09a1.49 1.49 0 0 0 -.5-.09c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-22.5zm-2 11c-.86 0-1.5-.63-1.5-1.5v-7c0-.87.65-1.5 1.5-1.5h1.5v10zm1.5 11.5a.5.5 0 0 1 -.5.5.5.5 0 0 1 -.5-.5v-7c0-.28.22-.5.5-.5s.5.22.5.5z"
                          fill-rule="evenodd"></path>
                      </svg>
                    </div>
                    <div style="flex: 1">Kitchen</div>
                  </div>
                  <div class="amenity d-flex" style="flex: 1 2 50%">
                    <div style="flex: 0 0 40px">
                      <svg viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false"
                           style="height: 19px; width: 19px; fill: currentcolor;">
                        <path
                          d="m12 15a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm0 5a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm5.92-5.78a.5.5 0 1 1 -.84.55c-1.19-1.81-3.07-2.77-5.08-2.77s-3.89.96-5.08 2.78a.5.5 0 0 1 -.84-.55c1.38-2.1 3.58-3.23 5.92-3.23s4.54 1.13 5.92 3.23zm2.98-3.03a.5.5 0 1 1 -.79.61c-1.66-2.14-5.22-3.8-8.11-3.8-2.83 0-6.26 1.62-8.12 3.82a.5.5 0 0 1 -.76-.65c2.05-2.42 5.75-4.17 8.88-4.17 3.19 0 7.05 1.8 8.9 4.19zm2.95-2.33a.5.5 0 0 1 -.71-.02c-2.94-3.07-6.71-4.84-11.14-4.84s-8.2 1.77-11.14 4.85a.5.5 0 0 1 -.72-.69c3.12-3.27 7.14-5.16 11.86-5.16s8.74 1.89 11.86 5.16a.5.5 0 0 1 -.02.71z"
                          fill-rule="evenodd"></path>
                      </svg>
                    </div>
                    <div style="flex: 1">Wifi</div>
                  </div>
                  <div class="amenity d-flex" style="flex: 1 2 50%">
                    <div style="flex: 0 0 40px">
                      <svg viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false"
                           style="height: 19px; width: 19px; fill: currentcolor;">
                        <path
                          d="m23.99 18.38-.5-2a .5.5 0 0 0 -.49-.38h-22a .5.5 0 0 0 -.49.38l-.5 2a .5.5 0 0 0 .49.62h23a .5.5 0 0 0 .49-.62zm-1.13-.38h-21.72l.25-1h21.22zm-21.36-3h21a .5.5 0 0 0 .5-.53c-.21-3.22-1.22-5.47-3-5.47a4911.8 4911.8 0 0 0 -8.8 0h-1.71c-.2 0-.26-.08-.19-.27a9.59 9.59 0 0 1 .17-.48c.13-.34.27-.68.43-1 .41-.79.82-1.25 1.1-1.25h10.5c.87 0 1.43-.7 1.4-1.52s-.64-1.48-1.55-1.48h-11.35c-3.84 0-7.29 4.4-8.99 11.38a.5.5 0 0 0 .49.62zm8.5-11h11.35c.35 0 .55.21.56.52.01.29-.14.48-.4.48h-10.51c-.8 0-1.42.68-1.99 1.8a10.74 10.74 0 0 0 -.65 1.61c-.31.82.23 1.59 1.13 1.59h1.71a33801.74 33801.74 0 0 1 8.8 0c .94 0 1.71 1.58 1.95 4h-19.8c1.65-6.21 4.7-10 7.85-10zm5 8a1 1 0 1 1 2 0 1 1 0 0 1 -2 0zm3 0a1 1 0 1 1 2 0 1 1 0 0 1 -2 0z"
                          fill-rule="evenodd"></path>
                      </svg>
                    </div>
                    <div style="flex: 1">Iron</div>
                  </div>
                  <div class="amenity d-flex" style="flex: 1 2 50%">
                    <div style="flex: 0 0 40px">
                      <svg viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false"
                           style="height: 19px; width: 19px; fill: currentcolor;">
                        <path
                          d="m12 0c-6.63 0-12 5.37-12 12s5.37 12 12 12 12-5.37 12-12-5.37-12-12-12zm0 23c-6.07 0-11-4.92-11-11s4.93-11 11-11 11 4.93 11 11-4.93 11-11 11zm .5-17h-4.5v11.5a.5.5 0 0 0 1 0v-4.5h3.5c1.93 0 3.5-1.57 3.5-3.5s-1.57-3.5-3.5-3.5zm0 6h-3.5v-5h3.5c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5z"
                          fill-rule="evenodd"></path>
                      </svg>
                    </div>
                    <div style="flex: 1">Free parking on premises</div>
                  </div>
                </div>
              </div>
              <div class="rules-table mt-4">
                <h3>Rules</h3>
                <strong>Enjoy the villa, but please respect the property.</strong>
                <br/>
                <ul>
                  <li>Smoking outdoors only.</li>
                  <li>Remove outdoor shoes.</li>
                  <li>Quiet time 11 p.m.</li>
                  <li>Separate trash: assist recycling.</li>
                </ul>
              </div>
              <div class="cancellations-table mt-4">
                <h3>Cancellations</h3>
                <strong>Strict Policy: Free cancellation for 48 hours</strong>
                <br/>
                After that, cancel up to 7 days before check-in and get a 50% refund, minus the service fee.
              </div>
            </div>

            <div class="col-lg-8 ml-auto">
              <div v-html="$page.property.fields.description"></div>
              <p class="class-action-buttons mt-5 text-center">
                <button @click="showBookingForm" class="btn btn-secondary btn-lg rounded-0"><i class="material-icons">calendar_today</i>
                  Book Now
                </button>&nbsp;
                <button @click="showQuestionForm" class="btn btn-secondary btn-lg rounded-0"><i class="material-icons">question_answer</i>
                  Ask a Question
                </button>
              </p>
              <!--<div class="container pt-4" ref="bookingForm">
                <div class="row">
                  <div class="col-12 text-center">
                    <span class="sub-title">{{ $page.property.fields.title }}</span>
                    <h2 class="font-weight-bold text-black mb-5">View Available Dates</h2>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12 text-center">
                    <div class='occsn_stack' id='occsn_stack_5301_9938'></div>
                  </div>
                </div>
              </div>-->
              <div class="container pt-4" v-if="displayQuestionForm" ref="questionForm">
                <div class="row">
                  <div class="col-12 text-center">
                    <span class="sub-title">{{ $page.property.fields.title }}</span>
                    <h2 class="font-weight-bold text-black mb-5">Have a Question? We're Here to Help!</h2>
                  </div>
                </div>
                <div class="row mb-4">
                  <div class="col-md-12 col-lg-12">
                    <form
                      action="https://formspree.io/admin@firebrandwebsolutions.com"
                      method="POST"
                      class="p-5 bg-white"
                    >
                      <div class="row form-group">
                        <div class="col-md-12 mb-3 mb-md-0">
                          <label class="font-weight-bold" for="fullname"
                          >Full Name</label
                          >
                          <input
                            type="text"
                            id="fullname"
                            class="form-control"
                            placeholder="Full Name"
                          />
                        </div>
                      </div>
                      <div class="row form-group">
                        <div class="col-md-12">
                          <label class="font-weight-bold" for="email">Email</label>
                          <input
                            type="email"
                            id="email"
                            class="form-control"
                            placeholder="Email Address"
                          />
                        </div>
                      </div>

                      <div class="row form-group">
                        <div class="col-md-12">
                          <label class="font-weight-bold" for="message">Message</label>
                          <textarea
                            name="message"
                            id="message"
                            cols="30"
                            rows="5"
                            class="form-control"
                            placeholder="Write your message here."
                          ></textarea>
                        </div>
                      </div>

                      <div class="row form-group">
                        <div class="col-md-12">
                          <input
                            type="submit"
                            value="Send"
                            class="btn btn-primary rounded-0 btn-lg"
                          />
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="site-section" v-if="getServices(false).length > 0">
        <!--<div class="container pt-4">
          <div class="row mt-4 mb-4 pt-4">
            <div class="col-lg-12 ml-auto text-center">
              <span class="sub-title">Browse Our</span>
              <h2 class="font-weight-bold text-black mb-5">{{ `${$page.property ? 'Other ' : ''}Villas` }}</h2>
            </div>
          </div>
        </div>-->
        <div class="px-4">
          <div class="row">
            <content-block-layout
              v-for="service in getServices(false).slice(0,4)"
              :key="service.id"
              className="col-lg-3 col-md-3 mb-6 project-entry"
              :title="service.title"
              :description="(service.summary) ? service.summary : ''"
              :link="service.link"
              linkText="More Details"
              :onLinkClicked="setActiveService.bind(this, service.id)"
              :image="service.image"
              imageAlt=""
            />
          </div>
          <div class="row">
            <div class="col-12 text-center mt-5">
              <span class="sub-title">Testimonials from</span>
              <h2 class="font-weight-bold text-black mb-5">Our Friends</h2>
            </div>
          </div>
          <div class="nonloop-block-13 owl-carousel owl-loaded owl-drag">
            <div class="owl-stage-outer">
              <div class="owl-content-wrapper">
                <div
                  v-if="getTestimonial(0)"
                  class="owl-item active"
                  style="width: 380px;"
                >
                  <testimonial-block-layout
                    className="testimony"
                    :reviewedBy="getTestimonial(0).reviewedBy"
                    :image="getTestimonial(0).image"
                    :testimonial="getTestimonial(0).testimonial"
                  />
                  <div
                    class="homepage-hero-action action-link-block text-center space-bottom">
                    <!--<a class="action-link space-top g-pstyle3" href="/lucas-profile" aria-label="My Work Experience">My Work Experience</a>-->
                  </div>
                </div>

                <div
                  v-if="getTestimonial(1)"
                  class="owl-item active"
                  style="width: 380px;"
                >
                  <testimonial-block-layout
                    className="testimony"
                    :reviewedBy="getTestimonial(1).reviewedBy"
                    :image="getTestimonial(1).image"
                    :testimonial="getTestimonial(1).testimonial"
                  />
                  <div
                    class="homepage-hero-action action-link-block text-center space-bottom">
                    <!--<a class="action-link space-top g-pstyle3" href="/lucas-profile" aria-label="My Work Experience">My Work Experience</a>-->
                  </div>
                </div>

                <div
                  v-if="getTestimonial(2)"
                  class="owl-item active"
                  style="width: 380px;"
                >
                  <testimonial-block-layout
                    className="testimony"
                    :reviewedBy="getTestimonial(2).reviewedBy"
                    :image="getTestimonial(2).image"
                    :testimonial="getTestimonial(2).testimonial"
                  />
                  <div
                    class="homepage-hero-action action-link-block text-center space-bottom">
                    <!--<a class="action-link space-top g-pstyle3" href="/lucas-profile" aria-label="My Work Experience">My Work Experience</a>-->
                  </div>
                </div>
                <div
                  v-if="getTestimonial(3)"
                  class="owl-item active"
                  style="width: 380px;"
                >
                  <testimonial-block-layout
                    className="testimony"
                    :reviewedBy="getTestimonial(3).reviewedBy"
                    :image="getTestimonial(3).image"
                    :testimonial="getTestimonial(3).testimonial"
                  />
                  <div
                    class="homepage-hero-action action-link-block text-center space-bottom">
                    <!--<a class="action-link space-top g-pstyle3" href="/lucas-profile" aria-label="My Work Experience">My Work Experience</a>-->
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
  import marked from 'marked';

  import Vue from 'vue';

  //import VueGallerySlideshow from 'vue-gallery-slideshow';

  import ContentBlockLayout from '~/components/layouts/ContentBlockLayout.vue';
  import TestimonialBlockLayout from '~/components/layouts/TestimonialBlockLayout.vue';

  import ThumbnailGallery from '~/core/components/ThumbnailGallery.vue';


  // TODO: Implement page page that provides data interface?
  import HeroMixin from '~/mixins/HeroMixin';
  import SectionMixin from '~/mixins/SectionMixin';
  import ServiceMixin from '~/mixins/ServiceMixin';
  import TestimonialMixin from '~/mixins/TestimonialMixin';

  // Import static data
  import PropertiesData from '~/data/Properties.yml';

  export default {
    components: {
      ContentBlockLayout,
      TestimonialBlockLayout,
      ThumbnailGallery
      //VueGallerySlideshow
    },
    metaInfo: {
      title: "Classes"
    },
    mixins: [HeroMixin, SectionMixin, ServiceMixin, TestimonialMixin],
    data() {
      return {
        pageTitle: PropertiesData.title,
        pageData: PropertiesData,
        occasionScript: null,
        activeImage: null,
        activeService: null,
        displayBookingForm: false,
        displayQuestionForm: false,
        galleryIndex: null,
        //marked: marked
      }
    },
    computed: {
      serviceContent() {
        return PropertiesData;
      }
    },
    methods: {
      setActiveService(id) {
        let service = this.getService(id);
        this.activeService = Object.assign({}, service, {
          descriptionHtml: (service.description) ? marked(service.description) : null
        });
        // Hide Booking / Question forms as they are only relevant to the selected class
        this.hideBookingForm();
        this.hideQuestionForm();

        if (typeof window !== 'undefined') {
          this.stopPrimaryImageRotation();
          this.startPrimaryImageRotation();

          // TODO: Maybe use some kind of route method?
          window.history.pushState({}, this.activeService.title, `${this.$route.path}?id=${this.activeService.id}`);
          window.setTimeout((() => {
            this.$refs.pageHero.scrollIntoView();
          }).bind(this), 333);
        }
      },
      setActiveServiceByIndex(idx) {
        let service = this.getServiceByIndex(idx);
        this.activeService = Object.assign({}, service, {
          descriptionHtml: service.description //(document) ? marked(service.description) : ''
        });
        // Hide Booking / Question forms as they are only relevant to the selected class
        this.hideBookingForm();
        this.hideQuestionForm();

        if (typeof window !== 'undefined') {
          // TODO: Maybe use some kind of route method?
          window.history.pushState({}, this.activeService.title, `${this.$route.path}?id=${this.activeService.id}`);
          window.setTimeout(() => {
            //this.$refs.itemDetails.scrollIntoView();
          }, 333);
        }
      },
      unsetActiveService() {
        this.activeService = null;
      },
      /**
       * TODO: Is this used outside of thumbnails? If so make it a mixin.
       */
      getGalleryImages(start, end, featuredOnly) {
        let galleryImages = this.activeService.gallery instanceof Array ? this.activeService.gallery : [];
        galleryImages = (featuredOnly) ? galleryImages.filter((item) => item.featured) : galleryImages;

        start = (!isNaN(start)) ? start : 0;
        // Add 1 to end as slice doesn't count include the last item
        end = (!isNaN(end)) ? end + 1 : galleryImages.length;

        galleryImages = galleryImages.slice(start, Math.min(end, galleryImages.length));

        return galleryImages;
      },
      startPrimaryImageRotation(ms) {
        ms = (!isNaN(ms)) ? ms : 10000;

        console.log('starting image rotation');

        // Fisher-Yates Shuffle - memoized
        const shuffle = function shuffle(array) {
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
        };

        if (this.activeService && this.activeService.gallery instanceof Array) {
          // Copy the gallery
          // Only grab the first 6 items for the rotation
          let copy = this.activeService.gallery.slice(0, 6).map(item => item);
          this.$data.activeImage = copy.shift();
        }

        this.primaryImageShuffler = setInterval((() => {
          if (this.activeService && this.activeService.gallery instanceof Array) {
            // Copy the gallery
            let copy = this.activeService.gallery.slice(0, 6).map(item => item);
            this.$data.activeImage = shuffle(copy).shift();
          }
        }).bind(this), ms);
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
      // Grab the current path
      const {id} = this.$route.query;

      let service = null;
      let matchedServices = this.serviceContent.services.filter((service) => id === service.id);
      if (matchedServices.length > 0) service = matchedServices[0];

      if (service !== null) {
        this.setActiveService(service.id);
      }

      // Loop over scripts and strip any occasion ones, there's no API to relaunch this script
      /*for (let idx = 0; idx < document.scripts.length; idx++) {
        if (document.scripts[idx].src === 'https://app.getoccasion.com/p/preboot.js') {
          delete document.scripts[idx];
          console.log('deleted occasion script');
          window.location.reload();
        }
      }

      this.occasionScript = document.createElement('script');
      this.occasionScript.setAttribute('src', 'https://app.getoccasion.com/p/preboot.js');
      this.occasionScript.setAttribute('id', 'bc-occasion-calendar-script');
      document.head.appendChild(this.occasionScript);*/


    },
    updated() {
      // Loop over scripts and strip any occasion ones, there's no API to relaunch this script
      /*for (let idx = 0; idx < document.scripts.length; idx++) {
        if (document.scripts[idx].src === 'https://app.getoccasion.com/p/preboot.js') {
          delete document.scripts[idx];
          console.log('deleted occasion script');
          //window.location.reload();
        }
      }

      this.occasionScript = document.createElement('script');
      this.occasionScript.setAttribute('src', 'https://app.getoccasion.com/p/preboot.js');
      document.head.appendChild(this.occasionScript);*/
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
        image
        imageId
        gallery {
          id
          src
          caption
          featured
        }
        galleryFolder
        link
        linkText
        title
        metaKeywords
        metaDescription
        summary
        description
      }
    }
  }
</page-query>


<style lang="scss">
  .page-wrap {
    margin-top: 54px;
  }

  .properties-hero {
    height: auto !important;
    min-height: 400px;
    color: #222;

    h1 {
      color: #222;
    }

    .sub-text {
      color: #999 !important;
    }

    .row {
      height: auto;
      min-height: 400px;
    }
  }
</style>

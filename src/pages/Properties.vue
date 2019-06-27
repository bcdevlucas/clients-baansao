<template>
  <Layout>
    <div
      v-if="!activeService && getHeroById('page-hero') !== null"
      class="site-blocks-cover overlay inner-page"
      :style="`background-image: url(${getHeroById('page-hero').image});`"
      data-aos="fade"
      data-stellar-background-ratio="0.5"
    >
      <div class="container" ref="pageHero">
        <div class="row align-items-center justify-content-center">
          <div class="col-md-10">
            <h1>{{ getHeroById('page-hero').title }}</h1>
            <div v-if="getHeroById('page-hero').summary" class="sub-text" v-html="(getHeroById('page-hero').summary) ? getHeroById('page-hero').summary : ''"></div>
          </div>
        </div>
      </div>
    </div>

    <div
      v-if="activeService && getHeroById('page-hero') !== null"
      class="site-blocks-cover overlay inner-page"
      :style="`background-image: url(${activeImage.src});`"
      data-aos="fade"
      data-stellar-background-ratio="0.5"
    >
      <div class="container" ref="pageHero">
        <div class="row align-items-center justify-content-center">
          <div class="col-md-10">
            <h1 v-if="activeService">{{ activeService.title }}</h1>
            <div class="sub-text" v-html="(activeService.summary) ? activeService.summary : ''"></div>
          </div>
        </div>
      </div>
    </div>

    <div class="site-section" v-if="activeService" :key="activeService.id">
      <div class="container pt-4">
        <!--<div class="row mt-4 mb-4 pt-4">
          <div class="col-lg-12 ml-auto text-center">
            <span class="sub-title" v-html="activeService.summary"></span>
            <h2 class="font-weight-bold text-black mb-5" v-html="activeService.title"></h2>
          </div>
        </div>-->
        <div class="row mt-4 mb-4 pt-4">
          <div class="col-lg-4 mb-5 mb-lg-0">
            <div class="img">
              <img v-img:gallery :src="activeService.image" :alt="activeService.caption" class="img-fluid">
            </div>
            <div class="thumbnail-strip" v-if="activeService.gallery instanceof Array">
              <img v-img:gallery v-if="gallery" v-for="gallery in getGalleryImages(0,2)" :src="gallery.src" :alt="gallery.caption" class="img">
            </div>
            <div class="thumbnail-strip" v-if="activeService.gallery instanceof Array">
              <img v-img:gallery v-if="gallery" v-for="gallery in getGalleryImages(3,5)" :src="gallery.src" :alt="gallery.caption" class="img">
            </div>
            <div class="thumbnail-strip" v-if="activeService.gallery instanceof Array">
              <img v-img:gallery v-if="gallery" v-for="gallery in getGalleryImages(6,8)" :src="gallery.src" :alt="gallery.caption" class="img">
            </div>
            <div class="thumbnail-strip" v-if="activeService.gallery instanceof Array">
              <img v-img:gallery v-if="gallery" v-for="gallery in getGalleryImages(9,11)" :src="gallery.src" :alt="gallery.caption" class="img">
            </div>
          </div>
          <div class="col-lg-8 ml-auto">
            <div v-html="activeService.descriptionHtml"></div>
            <p class="class-action-buttons mt-5">
              <button @click="showBookingForm" class="btn btn-secondary btn-lg rounded-0"><i class="material-icons">calendar_today</i> Book Now</button>&nbsp;
              <button @click="showQuestionForm" class="btn btn-secondary btn-lg rounded-0"><i class="material-icons">question_answer</i> Ask a Question</button>
            </p>
            <!--<div class="container pt-4" ref="bookingForm">
              <div class="row">
                <div class="col-12 text-center">
                  <span class="sub-title">{{ activeService.title }}</span>
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
      </div>

      <div class="container pt-4" v-if="displayQuestionForm" ref="questionForm">
        <div class="row">
          <div class="col-12 text-center">
            <span class="sub-title">{{ activeService.title }}</span>
            <h2 class="font-weight-bold text-black mb-5">Have a Question? We're Here to Help!</h2>
          </div>
        </div>
        <div class="row mt-4 mb-4 pt-4">
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

    <div class="site-section" v-if="getServices(false).length > 0">
      <div class="container pt-4">
        <div class="row mt-4 mb-4 pt-4">
          <div class="col-lg-12 ml-auto text-center">
            <span class="sub-title">Browse</span>
            <h2 class="font-weight-bold text-black mb-5">{{ `Our ${activeService ? 'Other ' : ''}Rentals` }}</h2>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <content-block-layout
            v-for="service in getServices(false).slice(0,3)"
            :key="service.id"
            className="col-lg-4 col-md-4 mb-6 project-entry"
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
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
  //import marked from 'marked';

  import Vue from 'vue';

  //import VueGallerySlideshow from 'vue-gallery-slideshow';

  import ContentBlockLayout from '~/components/layouts/ContentBlockLayout.vue';
  import TestimonialBlockLayout from '~/components/layouts/TestimonialBlockLayout.vue';

  // TODO: Implement page page that provides data interface?
  import HeroMixin from '~/mixins/HeroMixin';
  import SectionMixin from '~/mixins/SectionMixin';
  import TestimonialMixin from '~/mixins/TestimonialMixin';

  // Import static data
  import PropertiesData from '~/data/Properties.yml';

  export default {
    components: {
      ContentBlockLayout,
      TestimonialBlockLayout,
      //VueGallerySlideshow
    },
    metaInfo: {
      title: "Classes"
    },
    mixins: [HeroMixin, SectionMixin, TestimonialMixin],
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
      getServices(includeActive) {
        includeActive = typeof includeActive === 'boolean' ? includeActive : true;

        let services = (this.serviceContent.services instanceof Array) ? this.serviceContent.services : [];

        if (!includeActive && this.activeService !== null) {
          return services.filter((service) => service.id !== this.activeService.id);
        }

        return services;
      },
      getService(id) {
        let items = this.serviceContent.services;

        if (items instanceof Array && items.length > 0) {
          items = items.filter(item => item.id === id);
          if (items.length > 0) return items.pop();
        }

        return null
      },
      setActiveService(id) {
        let service = this.getService(id);
        this.activeService = Object.assign({}, service, {
          descriptionHtml: service.description //(document) ? marked(service.description) : ''
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
      getServiceByIndex(idx) {
        let items = this.serviceContent.services;

        if (items instanceof Array && items.length > idx) {
          return items[idx];
        }

        return null
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
      getGalleryImages(start, end) {
        let galleryImages = this.activeService.gallery instanceof Array ? this.activeService.gallery : [];

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
          let copy = this.activeService.gallery.map(item => item);
          this.$data.activeImage = copy.pop();
        }

        this.primaryImageShuffler = setInterval((() => {
          if (this.activeService && this.activeService.gallery instanceof Array) {
            // Copy the gallery
            let copy = this.activeService.gallery.map(item => item);
            this.$data.activeImage = shuffle(copy).pop();
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
      const { id } = this.$route.query;

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


<style>
  .class-action-buttons {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .class-action-buttons > * {
    flex: 1;
  }

  .owl-content-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  @media screen and (min-width: 768px) {
    .owl-content-wrapper {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: center;
    }
  }

  @media screen and (min-width: 1280px) {
    .class-action-buttons {
      display: block;
    }
  }

  .project-entry .img-fluid {
    height: 30vh;
    object-fit: contain;
  }

  @media screen and (min-width: 1280px) {
    .project-entry .img-fluid {
      /*height: 20vh;*/
    }
  }

  .post-entry {
    text-align: center;
  }

  .post-entry .img-fluid {
    height: 30vh;
  }

  @media screen and (min-width: 1280px) {
    .post-entry .img-fluid {
      height: 40vh;
    }
  }

  .site-blocks-cover li,
  .site-section li,
  .project-entry li {
    list-style-type: square !important;
    list-style-position: inside !important;
  }

  /* Fix glitch with markdown rendering */
  .site-blocks-cover li p,
  .site-section li p,
  .project-entry li p {
    display: inline;
    font-size: 1.1rem
  }

  .thumbnail-strip {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    align-items: flex-start;
  }

  .thumbnail-strip > * {
    width: 33.33333%;
    flex: 0 1 33.33333%;
    padding-top: 3px;
    object-fit: cover;
    height: 80px;
  }

  .thumbnail-strip > * {
    padding-right: 3px;
  }

  .thumbnail-strip > :nth-child(n+3) {
    padding-right: 0;
  }
</style>

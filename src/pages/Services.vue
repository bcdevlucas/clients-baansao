<template>
  <Layout>
    <div
      v-if="getHeroById('page-hero') !== null"
      class="site-blocks-cover overlay inner-page"
      :style="`background-image: url(${getHeroById('page-hero').image});`"
      data-aos="fade"
      data-stellar-background-ratio="0.5"
    >
      <div class="container">
        <div class="row align-items-center justify-content-center">
          <div class="col-md-10">
            <span class="sub-text"></span>
            <h1>{{ getHeroById('page-hero').title }}</h1>
          </div>
        </div>
      </div>
    </div>

    <div class="site-section" v-if="activeService" :key="activeService.id">
      <div class="container pt-4" ref="itemDetails">
        <div class="row mt-4 mb-4 pt-4">
          <div class="col-lg-12 ml-auto text-center">
            <span class="sub-title" v-html="activeService.summary"></span>
            <h2 class="font-weight-bold text-black mb-5" v-html="activeService.title"></h2>
          </div>
        </div>
        <div class="row mt-4 mb-4 pt-4">
          <div class="col-lg-6 mb-5 mb-lg-0">
            <div class="img">
              <img :src="activeService.image" :alt="activeService.caption" class="img-fluid">
            </div>
          </div>
          <div class="col-lg-5 ml-auto">
            <p v-html="activeService.description"></p>
            <p class="class-action-buttons mt-5">
              <button @click="showBookingForm" class="btn btn-secondary btn-lg rounded-0"><i class="material-icons">calendar_today</i> Book Now</button>&nbsp;
              <button @click="showQuestionForm" class="btn btn-secondary btn-lg rounded-0"><i class="material-icons">question_answer</i> Ask a Question</button>
            </p>
          </div>
        </div>
      </div>

      <div class="container pt-4" ref="bookingForm">
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

      <div class="site-section" v-if="getServices().length > 0">
        <div class="container">
          <div class="row">
            <content-block-layout
              v-for="service in getServices()"
              :key="service.id"
              className="col-lg-6 col-md-6 mb-6 project-entry"
              :title="service.title"
              :description="service.summary"
              :link="service.link"
              linkText="More Details"
              :onLinkClicked="setActiveService.bind(this, getServices().indexOf(service))"
              :image="service.image"
              imageAlt=""
            />
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
  import ContentBlockLayout from '~/components/layouts/ContentBlockLayout.vue';
  import TestimonialBlockLayout from '~/components/layouts/TestimonialBlockLayout.vue';

  // TODO: Implement page page that provides data interface?
  import HeroMixin from '~/mixins/HeroMixin';
  import SectionMixin from '~/mixins/SectionMixin';
  import TestimonialMixin from '~/mixins/TestimonialMixin';

  // Import static data
  import ServiceData from '~/data/Services.yml';

  export default {
    components: {
      ContentBlockLayout,
      TestimonialBlockLayout,
    },
    metaInfo: {
      title: "Classes"
    },
    mixins: [HeroMixin, SectionMixin, TestimonialMixin],
    data() {
      return {
        pageTitle: ServiceData.title,
        pageData: ServiceData,
        occasionScript: null,
        activeService: null,
        displayBookingForm: false,
        displayQuestionForm: false
      }
    },
    computed: {
      serviceContent() {
        return ServiceData;
      }
    },
    methods: {
      getServices() {
        return (this.serviceContent.services instanceof Array) ? this.serviceContent.services : [];
      },
      getService(idx) {
        let items = this.serviceContent.services;

        if (items instanceof Array && items.length > idx) {
          return items[idx];
        }

        return null
      },
      setActiveService(idx) {
        this.activeService = this.getService(idx);
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
      showBookingForm() {
        this.displayBookingForm = true;

        if (typeof window !== 'undefined') {
          window.setTimeout(() => {
            this.$refs.bookingForm.scrollIntoView();
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
            this.$refs.questionForm.scrollIntoView();
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

      if (service !== null) this.setActiveService(this.serviceContent.services.indexOf(service));

      // Loop over scripts and strip any occasion ones, there's no API to relaunch this script
      for (let idx = 0; idx < document.scripts.length; idx++) {
        if (document.scripts[idx].src === 'https://app.getoccasion.com/p/preboot.js') {
          delete document.scripts[idx];
          console.log('deleted occasion script');
          window.location.reload();
        }
      }

      this.occasionScript = document.createElement('script');
      this.occasionScript.setAttribute('src', 'https://app.getoccasion.com/p/preboot.js');
      this.occasionScript.setAttribute('id', 'bc-occasion-calendar-script');
      document.head.appendChild(this.occasionScript);
    },
    updated() {
      // Loop over scripts and strip any occasion ones, there's no API to relaunch this script
      for (let idx = 0; idx < document.scripts.length; idx++) {
        if (document.scripts[idx].src === 'https://app.getoccasion.com/p/preboot.js') {
          delete document.scripts[idx];
          console.log('deleted occasion script');
          //window.location.reload();
        }
      }

      this.occasionScript = document.createElement('script');
      this.occasionScript.setAttribute('src', 'https://app.getoccasion.com/p/preboot.js');
      document.head.appendChild(this.occasionScript);
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

  .project-entry {
    text-align: center;
  }

  .project-entry .img-fluid {
    height: 40vh;
  }

  @media screen and (min-width: 1280px) {
    .project-entry .img-fluid {
      height: 50vh;
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
</style>

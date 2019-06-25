<template>
  <Layout>
    <div
      class="site-blocks-cover overlay inner-page"
      style="background-image: url(/images/class-samples/IMG_3114.jpg);"
    >
      <div class="container">
        <div class="row align-items-center justify-content-center">
          <div class="col-md-10">
            <span class="sub-text"></span>
            <h1>Our Availability</h1>
          </div>
        </div>
      </div>
    </div>

    <div class="site-section">
      <div class="container pt-4">
        <div class="row">
          <div class="col-12 text-center">
            <span class="sub-title">Summer 2019</span>
            <h2 class="font-weight-bold text-black mb-5">View Available Dates</h2>
          </div>
        </div>

        <div class="row">
          <div class="col-12 text-center">
            <div class='occsn_stack' id='occsn_stack_5301_9938'></div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
  import ContentBlockLayout from '~/components/layouts/ContentBlockLayout.vue';

  // Import static data
  import ServiceData from '~/data/Services.yml';

  export default {
    components: {
      ContentBlockLayout,
    },
    metaInfo: {
      title: "Classes"
    },
    data() {
      return {
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
    },
    mounted() {
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

      // Grab the current path
      const { id } = this.$route.query;

      let service = null;
      let matchedServices = this.serviceContent.services.filter((service) => id === service.id);
      if (matchedServices.length > 0) service = matchedServices[0];

      if (service !== null) this.setActiveService(this.serviceContent.services.indexOf(service));
    },
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

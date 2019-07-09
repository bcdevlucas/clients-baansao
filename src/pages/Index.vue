<template>
  <Layout
    :displayPosts="false"
  >
    <div class="hero-wrapper">
      <!--<video autoplay muted loop playsinline id="bg-video" class="hero-mask">
        <source src="/video/032715490-dandelion-blowing-slow-motion_H264_420-web-xl.mp4" type="video/mp4">
      </video>-->

      <!-- This hero relies on Services/Properties - it's not ready yet though! -->
      <!--<div
        v-if="activeService && getHeroById('page-hero') !== null"
        class="site-blocks-cover overlay inner-page"
        :style="`background-image: url(${activeImage.src});`"
        data-aos="fade"
        data-stellar-background-ratio="0.5"
      >
        <div class="container" ref="pageHero">
          <div class="row align-items-center justify-content-center">
            <div class="col-md-10 text-center">
              <span class="sub-text">Baan Saowanee's</span>
              <h1 v-if="activeService">{{ activeService.title }}</h1>
              <div class="sub-text" v-html="(activeService.summary) ? activeService.summary : ''"></div>
            </div>
          </div>
        </div>
      </div>-->

      <div class="site-blocks-cover overlay aos-init aos-animate" style="background-image: url(images/orchard-view/keepers/1921024_642689422472455_1215029725_o.00.jpg)" data-aos="fade" data-stellar-background-ratio="0.5">
        <div class="palm-box-shadow"></div>
        <div class="moving-palm-left animate"></div>
        <div class="moving-palm-right animate"></div>
        <div class="moving-palm-solo animate"></div>
        <div class="palm-fog animate"></div>
        <div class="container homepage-hero-content">
          <div class="row align-items-center text-center justify-content-center" style="position: relative; top: -3rem;">
            <div class="col-md-8">
              <div class="hero-logo"><span></span></div>
              <span class="sub-text">Baan Saowanee's</span>
              <h1>Orchard View Villa</h1>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="content-wrapper">
      <div class="site-section quick-links pb-0">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="content-block">

              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-4">
              <a href="/classes" class="site-block-feature d-flex p-4 rounded mb-4">
                <div class="mr-3">
                  <i class="material-icons block-icon">wb_sunny</i>
                </div>
                <div class="text">
                  <h2 class="font-weight-bold text-black">Things to Do</h2>
                  <p>Check out our current offerings!</p>
                </div>
              </a>
            </div>
            <div class="col-lg-4">
              <a href="/events" class="site-block-feature d-flex p-4 rounded mb-4">
                <div class="mr-3">
                  <i class="material-icons block-icon">calendar_today</i>
                </div>
                <div class="text">
                  <h2 class="font-weight-bold text-black">Book Your Stay</h2>
                  <p>View our availability calendar</p>
                </div>
              </a>
            </div>
            <div class="col-lg-4">
              <a href="#" class="site-block-feature d-flex p-4 rounded mb-4">
                <div class="mr-3">
                  <i class="material-icons block-icon">motorcycle</i>
                </div>
                <div class="text">
                  <h2 class="font-weight-bold text-black">Vehicle Rentals</h2>
                  <p>View motorbike / vehicle rentals</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="site-section pt-0">
        <div class="container pt-4">
          <div class="row mt-4 mb-4 pt-4">
            <div class="col-lg-12 ml-auto text-center">
              <span class="sub-title">Welcome to</span>
              <h2 class="font-weight-bold text-black mb-5">Baan Saowanee</h2>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-sm-12">
              <span class="flower-separator-pink"></span>
              <p>Baan Saowanee is a collection of holiday home rentals situated on the north side of Ko Samui island, a short five minute drive to scenic Mae Nam Beach. Sun, sand and the Gulf of Siam combine to make many a perfect day.</p>
              <p>Our vacation homes are located in a quiet community enhanced with lush tropical greenery, fruit trees and flower blooms; but only a short walk away from convenience: restaurants, coffee bars, bakeries and other small shops. Picturesque Mae Nam village is nearby, as is the community Buddhist spiritual centre: Golden Mountain Temple.</p>
              <p>Baan Saowanee guests have a range of rental options to choose from, dependent upon the number of persons and quality of accommodation. All of our holiday properties are clean, attractive and well maintained.</p>
            </div>
          </div>
        </div>
      </div>

      <div class="site-section pt-0">
        <div class="container pt-4">
          <div class="row mt-4 mb-4 pt-4">
            <div class="col-lg-12 ml-auto text-center">
              <span class="sub-title">Browse</span>
              <h2 class="font-weight-bold text-black mb-5">Our Rentals</h2>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <content-block-layout
              v-for="service in getServices()"
              v-if="typeof service.summary === 'string'"
              :key="service.id"
              className="col-lg-6 col-md-6 mb-6 project-entry"
              :title="service.title"
              :description="(service.summary) ? service.summary : ''"
              :link="service.link"
              linkText="Learn More"
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
  //import marked from 'marked';

  import ContentBlockLayout from '~/components/layouts/ContentBlockLayout.vue';

  import ServiceMixin from '~/mixins/ServiceMixin';

  // Import static data
  import PropertiesData from '~/data/Properties.yml';

  export default {
    components: {
      ContentBlockLayout,
    },
    metaInfo: {
      title: 'Baan Saowanee - Ko Samui, Thailand'
    },
    mixins: [ServiceMixin],
    computed: {
      serviceContent() {
        return PropertiesData;
      }
    },
    data() {
      return {
        //marked: marked
      };
    }
  }
</script>

<style lang="scss">
  .project-entry {
    /*text-align: center;*/
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

  .hero-logo {
    padding: 1rem;
    margin-bottom: 1rem;

    span {
      margin: 0 auto;

      display: block;
      background: url(/images/logo.png) no-repeat;
      -webkit-background-size: cover;
      background-size: cover;
      width: 100px;
      height: 100px;
      animation: logospin 60s 0s;
      animation-iteration-count: infinite;

      filter: drop-shadow(2px 2px 6px black);
    }

    @keyframes logospin {
     0% {
        transform: rotate(0deg);
      }

      100% {
        transform: rotate(-180deg);
      }

      100% {
        transform: rotate(-359deg);
      }
    }
  }

  .homepage-hero-content {
    position: relative;
    z-index: 50;
  }

  .flower-separator-pink {
    margin: 2em auto;
    display: block;
    background: url(/images/decorations/leelawadee-pink.png) no-repeat center center;
    background-size: contain;
    width: 300px;
    height: 150px
  }

  .flower-separator-white {
    margin: 2em auto;
    display: block;
    background: url(/images/decorations/leelawadee-pink.png) no-repeat center center;
    background-size: contain;
    width: 300px;
    height: 150px
  }
</style>

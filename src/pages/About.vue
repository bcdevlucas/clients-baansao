<template>
  <Layout>
    <div class="hero-wrapper">
      <div
        v-if="getHeroById('page-hero') !== null"
        class="site-blocks-cover inner-page text-shadow"
        :style="`background-image: url(${getHeroById('page-hero').image});`"
        data-aos="fade"
        data-stellar-background-ratio="0.5"
      >
        <div class="container">
          <div class="row align-items-center justify-content-center">
            <div class="col-md-10 text-center">
              <div class="hero-logo"><span></span></div>
              <span class="sub-text"><strong>{{ getHeroById('page-hero').subTitle }}</strong></span>
              <h1>{{ getHeroById('page-hero').title }}</h1>
              <!--<div v-if="getHeroById('page-hero').description" class="sub-text" v-html="(getHeroById('page-hero').description) ? getHeroById('page-hero').description : ''"></div>-->
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="content-wrapper">
      <div v-if="getSection(0) !== null" class="site-section about-section">
        <div class="container">
          <div class="row align-items-center justify-content-center mt-5 mb-5 pb-5">
            <div class="col-lg-6 img-years mb-5 mb-lg-0">
              <img
                :src="getSection(0).image"
                alt="Image"
                class="img-fluid circle float-left"
              />
            </div>
            <div class="col-lg-6 ml-auto text-center">
              <span class="sub-title" v-html="getSection(0).summary"></span>
              <h3 class="mb-4" v-html="getSection(0).title"></h3>
              <p class="mb-5" v-html="getSection(0).description"></p>
              <p>
                <a
                  :href="getSection(0).link"
                  target="_blank"
                  class="btn btn-art-class btn-lg rounded-0">
                  <i class="material-icons block-icon">brush</i> {{ getSection(0).linkText }}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div v-if="getSection(1) !== null" class="site-section about-section">
        <div class="container">
          <div class="row align-items-center justify-content-center mb-5 pb-5">
            <div class="col-lg-6 ml-auto text-center">
              <span class="sub-title" v-html="getSection(1).summary"></span>
              <h3 class="mb-4" v-html="getSection(1).title"></h3>
              <p class="mb-5" v-html="getSection(1).description"></p>
            </div>
            <div class="col-lg-6 img-years mb-5 mb-lg-0">
              <img
                :src="getSection(1).image"
                alt="Image"
                class="img-fluid circle float-right"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="content-wrapper">
      <div class="site-section">
        <div class="container">
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
          <div id="contact" class="row">
            <div class="col-md-12 col-lg-12">
              <h2 class="site-heading text-black mb-5">
                {{ pageSubTitle }}
              </h2>

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
  </Layout>
</template>

<script>
  // TODO: Implement page page that provides data interface?
  import ContentBlockLayout from '~/components/layouts/ContentBlockLayout.vue';
  import TestimonialBlockLayout from '~/components/layouts/TestimonialBlockLayout.vue';

  import HeroMixin from '~/mixins/HeroMixin';
  import SectionMixin from '~/mixins/SectionMixin';
  import TestimonialMixin from '~/mixins/TestimonialMixin';

  // Import static data
  import AboutData from '~/data/Company.yml';

  export default {
    metaInfo: {
      title: "About"
    },
    components: {
      ContentBlockLayout,
      TestimonialBlockLayout,
      //VueGallerySlideshow
    },
    mixins: [HeroMixin, SectionMixin, TestimonialMixin],
    data() {
      return {
        // TODO: Require this data format for pages
        pageData: AboutData,
        pageTitle: AboutData.title,
        pageSubTitle: AboutData.subtitle
      }
    },
    computed: {
      pageSectionContent() {
        console.log('dumping about data');
        console.log(AboutData);
        return (AboutData.hasOwnProperty('sections')) ? AboutData.sections : [];
      }
    }
  };
</script>

<style>
  .site-half .img-bg-1 {
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    position: absolute;
    width: 50%;
    height: 100%;

  }

  @media screen and (min-width: 1280px) {
    left: 20%;
  }

  .circle {
    border-radius: 50%;
    object-fit: cover;
    width: 350px;
    height: 350px;
  }
</style>

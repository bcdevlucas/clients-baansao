<template>
  <Layout>
    <div
      v-if="getHeroById('page-hero') !== null"
      class="site-blocks-cover inner-page"
      :style="`background-image: url(${getHeroById('page-hero').image});`"
      data-aos="fade"
      data-stellar-background-ratio="0.5"
    >
      <div class="container">
        <div class="row align-items-center justify-content-center">
          <div class="col-md-10">
            <span class="sub-text text-muted"></span>
            <h1>{{ getHeroById('page-hero').title }}</h1>
          </div>
        </div>
      </div>
    </div>
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
  </Layout>
</template>

<script>
  // TODO: Implement page page that provides data interface?
  import HeroMixin from '~/mixins/HeroMixin';
  import SectionMixin from '~/mixins/SectionMixin';
  //import TestimonialMixin from '~/mixins/TestimonialMixin';

  // Import static data
  import AboutData from '~/data/Company.yml';

  export default {
    metaInfo: {
      title: "About"
    },
    mixins: [HeroMixin, SectionMixin],
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

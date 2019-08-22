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
        <div class="container hero-content">
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
      <svg-blur-section-block-layout
        class="angle"
        title="Popular Attractions"
        byLine="Experience local culture events."
        image="/images/baby-monkey-coconut-monkey-735023.jpg"
        aspectRatio="xMidYMid slice"
      />
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
      <svg-blur-section-block-layout
        class="angle"
        title="Local Thai Cuisine"
        byLine="Indulge in local specialty cuisine."
        image="/images/thai-seafood-basket.jpg"
        aspectRatio="xMidYMid slice"
      />
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
      <svg-blur-section-block-layout
        class="angle"
        title="Culture and Festivals"
        byLine="Experience local culture events."
        image="/images/baby-monkey-coconut-monkey-735023.jpg"
        aspectRatio="xMidYMin slice"
      />
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
      <svg-blur-section-block-layout
        class="angle"
        title="Motorbike & Vehicle Rentals"
        byLine="Explore the island on your own terms."
        image="/images/motorbikes-01.jpg"
        aspectRatio="xMidYMax slice"
      />
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
  </Layout>
</template>

<script>
  import SvgBlurSectionBlockLayout from '~/components/layouts/SvgBlurSectionBlockLayout.vue';

  // TODO: Implement page page that provides data interface?
  import HeroMixin from '~/mixins/HeroMixin';
  import SectionMixin from '~/mixins/SectionMixin';
  //import TestimonialMixin from '~/core/mixins/TestimonialMixin';

  // Import static data
  import ExploreData from '~/data/Explore.yml';

  export default {
    metaInfo: {
      title: "About"
    },
    components: {
      SvgBlurSectionBlockLayout
    },
    mixins: [HeroMixin, SectionMixin],
    data() {
      return {
        // TODO: Require this data format for pages
        pageData: ExploreData,
        pageTitle: ExploreData.title,
        pageSubTitle: ExploreData.subtitle
      }
    },
    computed: {
      pageSectionContent() {
        console.log('dumping about data');
        console.log(ExploreData);
        return (ExploreData.hasOwnProperty('sections')) ? ExploreData.sections : [];
      }
    }
  };
</script>

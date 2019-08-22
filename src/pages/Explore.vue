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
        title="Local Thai Cuisine"
        byLine="Indulge in local specialty cuisine."
        image="/images/thai-seafood-basket.jpg"
        aspectRatio="xMidYMid slice"
      />
      <svg-blur-section-block-layout
        title="Popular Attractions"
        byLine="Experience local culture events."
        image="/images/baby-monkey-coconut-monkey-735023.jpg"
        aspectRatio="xMidYMid slice"
      />
      <svg-blur-section-block-layout
        title="Motorbike & Vehicle Rentals"
        byLine="Explore the island on your own terms."
        image="/images/motorbikes-01.jpg"
        aspectRatio="xMidYMax slice"
      />
      <svg-blur-section-block-layout
        title="Culture and Festivals"
        byLine="Experience local culture events."
        image="/images/thai-seafood-basket.jpg"
        aspectRatio="xMidYMin slice"
      />
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

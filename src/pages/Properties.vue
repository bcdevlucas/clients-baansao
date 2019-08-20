<template>
  <Layout>
    <div class="">
      <div
        class="properties-hero site-blocks-cover"
      >
        <div class="container" ref="pageHero">
          <div class="row align-items-center justify-content-center">
            <div class="col-md-10 text-center">
              <div class="hero-logo"><span></span></div>
              <span class="sub-text"><strong>{{ getHeroById('page-hero').subTitle }}</strong></span>
              <h1>{{ getHeroById('page-hero').title }}</h1>
              <div v-if="getHeroById('page-hero').description" class="sub-text" v-html="(getHeroById('page-hero').description) ? getHeroById('page-hero').description : ''"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="content-wrapper">
      <div class="site-section" v-if="getServices(false).length > 0">
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
                  v-for="testimonial in getTestimonialsByIndex(0, 3)"
                  class="owl-item active"
                  style="width: 380px;"
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
  import ServiceMixin from '~/core/mixins/ServiceMixin';
  import TestimonialMixin from '~/core/mixins/TestimonialMixin';

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
        pageData: PropertiesData
      }
    },
    computed: {
      serviceContent() {
        return PropertiesData;
      }
    }
  }
</script>


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

<template>
  <Layout>
    <div class="">
      <div
        class="properties-hero site-blocks-cover angle"
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
      <div class="site-section" v-if="propertiesContent.length > 0">
        <div class="container px-4">
          <div class="row">
            <content-block-layout
              v-for="property in propertiesContent.slice(0, propertiesContent.length / 2)"
              v-if="typeof property.summary === 'string'"
              :key="property.id"
              className="col-lg-6 col-md-6 mb-6 project-entry"
              :title="property.title"
              :description="(property.summary) ? property.summary : ''"
              :link="`/property/${property.id}`"
              linkText="Learn More"
              :cloudinaryImage="property.imageId"
              cloudName="baansaowanee"
              :cloudFolder="property.galleryFolder"
              :imageAlt="property.caption"
            />

            <span class="flower-separator-white"></span>
          </div>
          <div class="row mt-6 mb-6">
            <content-block-layout
              v-for="property in propertiesContent.slice(propertiesContent.length / 2, propertiesContent.length)"
              v-if="typeof property.summary === 'string'"
              :key="property.id"
              className="col-md-4 col-lg-6 project-entry"
              :title="property.title"
              :description="(property.summary) ? property.summary : ''"
              :link="`/property/${property.id}`"
              linkText="Learn More"
              :cloudinaryImage="property.imageId"
              cloudName="baansaowanee"
              :cloudFolder="property.galleryFolder"
              :imageAlt="property.caption"
            />
          </div>
        </div>
      </div>
      <!--<div class="site-section">
        <div class="row">
          <div class="col-12 text-center mt-5">
            <span class="sub-title">Testimonials from</span>
            <h2 class="font-weight-bold text-black mb-5">Our Friends</h2>
          </div>
        </div>
        <div class="slider row">
          <div
            v-for="testimonial in getTestimonialsByIndex(0, 3)"
            class="col-sm-4 col-lg-3"
          >
            <testimonial-block-layout
              className="testimony"
              :reviewedBy="testimonial.reviewedBy"
              :image="testimonial.image"
              :testimonial="testimonial.testimonial"
            />
          </div>
        </div>
      </div>-->
    </div>
  </Layout>
</template>

<script>
  import marked from 'marked';

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

  import * as ImageUtils from '~/core/utils/ImageUtils';

  export default {
    components: {
      ContentBlockLayout,
      TestimonialBlockLayout,
      ThumbnailGallery
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
      propertiesContent() {
        const content = this.$page.properties.edges.map(edge => {
          const data = Object.assign({ id: edge.node.id }, edge.node.fields);
          data.summary = (typeof window !== 'undefined') ? marked(data.summary) : data.summary;
          data.description = (typeof window !== 'undefined') ? marked(data.description) : data.description;
          return data;
        });

        return content;
      },
      serviceContent() {
        return PropertiesData;
      }
    }
  }
</script>

<page-query>
  query Property {
    properties: allProperty {
      edges {
        node {
          id
          fields {
            image
            imageId
            gallery {
              id
              src
              caption
              #subCaption
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
    }
  }
</page-query>


<style lang="scss">
  .page-wrap {
    margin-top: 78px;
  }

  .properties-hero {
    height: auto !important;
    min-height: 400px;
    color: #222;
    h1 {
      color: midnightblue;
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

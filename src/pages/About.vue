<template>
  <Layout>
    <div class="hero-wrapper about-hero">
      <div class="site-blocks-cover angle text-shadow" style="background-image: url(/images/blur.jpg); background-position: top center !important">
        <!--<div class="palm-fog animate"></div>-->
        <div class="moving-palm-left animate"></div>
        <div class="moving-palm-solo animate"></div>
        <div class="moving-palm-right animate"></div>
        <div class="container homepage-hero-content">
          <div class="row align-items-center text-center justify-content-center">
            <div class="col-md-8 hero-text">
              <div class="hero-logo d-none d-md-block"><span></span></div>
              <!--<span class="flower-separator-white"></span>-->
              <span class="sub-text"><strong>Welcome to</strong></span>
              <h1>Our Neighborhood</h1>
              <img class="mom-cutout" src="/images/mom-cutout.png" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="content-wrapper">
      <div class="content-wrapper">
        <div class="site-section pt-0 darken-bg angle angle-join-top homepage-section-01" v-if="getSection(0) !== null">
          <div class="container pt-4">
            <div class="row mt-4 mb-4 pt-4">
              <div class="col-lg-12 ml-auto text-center" style="margin-top: 7vh">
                <span class="sub-title">{{ getSection(0).summary }}</span>
                <h2 class="font-weight-bold text-black mb-3">{{ getSection(0).title }}</h2>
                <div style="margin-top: 5vh" v-html="getSection(0).description">
                </div>
              </div>
            </div>
          </div>
          <span class="flower-separator-pink"></span>
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
    </div>
    <page-footer />
  </Layout>
</template>

<script>
  import marked from 'marked';

  import PageFooter from '~/components/Footer.vue';

  import ContentBlockLayout from '~/components/layouts/ContentBlockLayout.vue';
  import TestimonialBlockLayout from '~/components/layouts/TestimonialBlockLayout.vue';

  import ThumbnailGallery from '~/core/components/ThumbnailGallery.vue';

  // TODO: Implement page page that provides data interface?
  import HeroMixin from '~/mixins/HeroMixin';
  import SectionMixin from '~/mixins/SectionMixin';
  import ServiceMixin from '~/core/mixins/ServiceMixin';
  import TestimonialMixin from '~/core/mixins/TestimonialMixin';

  // Import static data
  import CompanyData from '~/data/Company.yml';

  import * as ImageUtils from '~/core/utils/ImageUtils';

  export default {
    components: {
      ContentBlockLayout,
      TestimonialBlockLayout,
      ThumbnailGallery,
      PageFooter
    },
    metaInfo: {
      title: "Classes"
    },
    mixins: [HeroMixin, SectionMixin, ServiceMixin, TestimonialMixin],
    data() {
      return {
        pageTitle: CompanyData.title,
        pageData: CompanyData
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
      pageSectionContent() {
        return (CompanyData.hasOwnProperty('sections')) ? CompanyData.sections : [];
      },
      serviceContent() {
        return CompanyData;
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

  .about-hero {
    .site-blocks-cover {
      height: 110vh;

      .hero-content > .row {
        height: 110vh;
      }
    }
  }
</style>

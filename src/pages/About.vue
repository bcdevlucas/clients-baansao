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
              <!--<div v-if="getHeroById('page-hero').description" class="sub-text" v-html="(getHeroById('page-hero').description) ? getHeroById('page-hero').description : ''"></div>-->
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="content-wrapper">
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
                <div class="mb-5" v-html="getSection(0).description"></div>
                <div>
                  <a
                    :href="getSection(0).link"
                    target="_blank"
                    class="btn btn-art-class btn-lg rounded-0">
                    <i class="material-icons block-icon">brush</i> {{ getSection(0).linkText }}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <span class="flower-separator-white"></span>

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
  import CompanyData from '~/data/Company.yml';

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
        console.log('dumping about data');
        console.log(CompanyData);
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

  .properties-hero {
    height: auto !important;
    min-height: 400px;
    color: #111;
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

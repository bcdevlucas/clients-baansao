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

      <div class="site-blocks-cover angle text-shadow" style="background-image: url(/images/orchard-view-3br/20.jpg); background-position: bottom center !important">
        <!--<div class="palm-box-shadow"></div>-->
        <div class="moving-palm-left animate"></div>
        <div class="moving-palm-right animate"></div>
        <div class="moving-palm-solo animate"></div>
        <div class="palm-fog animate"></div>
        <div class="container homepage-hero-content">
          <div class="row align-items-center text-center justify-content-center" style="position: relative; top: -3rem;">
            <div class="col-md-8 hero-text">
              <div class="hero-logo"><span></span></div>
              <span class="sub-text"><strong>Welcome to Baan Saowanee's</strong></span>
              <h1>Vacation Homes</h1>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="content-wrapper">
      <div class="site-section pt-0">
        <div class="container pt-4">
          <div class="row mt-4 mb-4 pt-4">
            <div class="col-lg-12 ml-auto text-center">
              <span class="sub-title">Welcome to</span>
              <h2 class="font-weight-bold text-black mb-5">Baan Saowanee</h2>
            </div>
          </div>
        </div>
        <div class="container hero-description">
          <div class="row">
            <div class="col-sm-12">
              <p>Baan Saowanee is a collection of holiday home rentals situated on the north side of Ko Samui island, a short five minute drive to scenic Mae Nam Beach. Sun, sand and the Gulf of Siam combine to make many a perfect day.</p>
              <p>Our vacation homes are located in a quiet community enhanced with lush tropical greenery, fruit trees and flower blooms; but only a short walk away from convenience: restaurants, coffee bars, bakeries and other small shops. Picturesque Mae Nam village is nearby, as is the community Buddhist spiritual centre: Golden Mountain Temple.</p>
              <p>Baan Saowanee guests have a range of rental options to choose from, dependent upon the number of persons and quality of accommodation. All of our holiday properties are clean, attractive and well maintained.</p>
            </div>
          </div>
        </div>
      </div>

      <span class="flower-separator-pink"></span>

      <div class="site-section pt-0">
        <div class="container pt-4">
          <div class="row mt-4 mb-4 pt-4">
            <div class="col-lg-12 ml-auto text-center">
              <span class="sub-title">Browse</span>
              <h2 class="font-weight-bold text-black mb-5">Our Rentals</h2>
            </div>
          </div>
        </div>
        <div>
          <div class="row px-4">
            <property-grid-layout
              colClass="col-lg-3 col-md-4 mb-6 project-entry"
              :min="0"
              :max="4"
            />
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
  import marked from 'marked';

  import PropertyBlockLayout from '~/components/layouts/PropertyBlockLayout.vue';
  import PropertyGridLayout from '~/components/layouts/PropertyGridLayout.vue';
  import ContentBlockLayout from '~/components/layouts/ContentBlockLayout.vue';

  import ServiceMixin from '~/core/mixins/ServiceMixin';

  // Import static data
  import PropertiesData from '~/data/Properties.yml';

  export default {
    components: {
      PropertyBlockLayout,
      ContentBlockLayout,
      PropertyGridLayout
    },
    metaInfo: {
      title: 'Baan Saowanee - Ko Samui, Thailand'
    },
    mixins: [ServiceMixin],
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
    },
    data() {
      return {
        //marked: marked
      };
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
            price {
              amount
              currency
              dateStart
              dateEnd
              name
            }
            summary
            description
          }
        }
      }
    }
  }
</page-query>

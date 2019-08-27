<template>
  <Layout>
    <div class="content-wrapper property-posts">
      <div class="container-fluid">
        <div class="row column-wrapper">
          <div class="col-xl-8">
            <div class="hero-wrapper">
              <div
                v-if="getHeroById('page-hero') !== null"
                class="site-blocks-cover text-shadow"
                :style="`background-image: url(${getHeroById('page-hero').image});`"
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
            <div class="site-section" v-if="propertiesContent.length > 0">
              <div class="container px-4">
                <div class="row">
                  <property-block-layout
                    v-for="property in propertiesContent.slice(0, propertiesContent.length / 2)"
                    v-if="typeof property.summary === 'string'"
                    :key="property.id"
                    className="col-lg-6 project-entry"
                    :title="property.title"
                    :description="(property.summary) ? property.summary : ''"
                    :link="`/property/${property.id}`"
                    linkText="View Property"
                    :cloudinaryImage="property.imageId"
                    cloudName="baansaowanee"
                    :cloudFolder="property.galleryFolder"
                    :imageAlt="property.caption"
                    :prices="property.price"
                  />

                  <span class="flower-separator-white"></span>
                </div>
                <div class="row mt-6 mb-6">
                  <property-block-layout
                    v-for="property in propertiesContent.slice(propertiesContent.length / 2, propertiesContent.length)"
                    v-if="typeof property.summary === 'string'"
                    :key="property.id"
                    className="col-lg-6 project-entry"
                    :title="property.title"
                    :description="(property.summary) ? property.summary : ''"
                    :link="`/property/${property.id}`"
                    linkText="View Property"
                    :cloudinaryImage="property.imageId"
                    cloudName="baansaowanee"
                    :cloudFolder="property.galleryFolder"
                    :imageAlt="property.caption"
                    :prices="property.price"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-4 right-pane">
            <h3 class="category-title text-center mt-5 mb-5" style="display: block; width: 100%;">Great Local Deals</h3>
            <content-block-layout
              v-for="post in dealsContent"
              :key="post.id"
              className="col-xs-12 blog-post"
              :title="post.title"
              :description="post.summary"
              :link="post.path"
              :image="post.image"
              :imageAlt="post.caption"
              :datePublished="post.date"
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
  import ContentBlockLayout from '~/components/layouts/ContentBlockLayout.vue';
  import TestimonialBlockLayout from '~/components/layouts/TestimonialBlockLayout.vue';

  import ThumbnailGallery from '~/core/components/ThumbnailGallery.vue';

  import PostMixin from '~/core/mixins/PostMixin';
  import HeroMixin from '~/mixins/HeroMixin';
  import SectionMixin from '~/mixins/SectionMixin';
  import ServiceMixin from '~/core/mixins/ServiceMixin';
  import TestimonialMixin from '~/core/mixins/TestimonialMixin';

  // Import static data
  import PropertiesData from '~/data/Properties.yml';

  export default {
    components: {
      ContentBlockLayout,
      PropertyBlockLayout,
      TestimonialBlockLayout,
      ThumbnailGallery
    },
    metaInfo: {
      title: "Classes"
    },
    mixins: [HeroMixin, SectionMixin, ServiceMixin, PostMixin, TestimonialMixin],
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
    posts: allBlogPost {
      edges {
        node {
          title
          date
          image
          caption
          summary
          content
          path
          slug
        }
      }
    }
    featuredPosts: tag(id: "featured") {
      belongsTo {
        edges {
          node {
            ...on BlogPost {
              title
              date
              image
              caption
              summary
              content
              path
              slug
            }
          }
        }
      }
    }
    eventsPosts: tag(id: "events") {
      belongsTo {
        edges {
          node {
            ...on BlogPost {
              title
              date
              image
              caption
              summary
              content
              path
              slug
            }
          }
        }
      }
    }
    attractionsPosts: tag(id: "attractions") {
      belongsTo {
        edges {
          node {
            ...on BlogPost {
              title
              date
              image
              caption
              summary
              content
              path
              slug
            }
          }
        }
      }
    }
    dealsPosts: tag(id: "deals") {
      belongsTo {
        edges {
          node {
            ...on BlogPost {
              title
              date
              image
              caption
              summary
              content
              price
              path
              slug
            }
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

<style lang="scss">
  .full-width .content-block-image {
    float: left;
    width: 33%;
    margin-right: 2rem;
  }

  /* Don't restrict height on property images! */
  /*.property-posts .content-block-image {
    height: 220px;
  }*/

  .property-posts {
    background: #fefefe;

    .hero-wrapper {
      margin-left: -15px;
      margin-right: -15px;
      height: auto;
      height: 580px;
    }

    .hero-content {
      height: 100%;
    }

    .site-blocks-cover, .site-blocks-cover .row {
      height: 100%;
      min-height: 0;
    }

    h3 {
      font-size: 1.3rem;
      font-weight: bold;
    }

    .category-title {
      font-size: 2rem;
    }

    p.text-muted {
      color: #444 !important;
    }

    p {
      font-size: 1.15rem;
    }

    .column-wrapper {
      position: relative;
    }
  }

  .right-pane {
    background-color: rgba(245,245,245,1);
    position: fixed;
    right: 0;
    z-index: 100;
    border-left: 1px solid lightgrey;
    height: 100%;

    .blog-post,
    .post-entry,
    .project-entry {
      margin-bottom: 1.5rem;

      .content-block-inner {
        display: flex;
        padding-bottom: 1.5rem;
      }

      h3 {
        font-size: 1.3rem;
        font-weight: bold;
      }

      br {
        display: none; /* Get rid of line breaks, they'll make the layout weird and we're trimming the text anyway */
      }

      p {
        font-size: 1.15rem;
        padding-bottom: 0;
        margin-bottom: 0;
      }

      .content-block-image {
        margin-right: 1rem;
        height: auto;

        img {
          object-fit: cover;
          width: 115px !important;
          height: 115px !important;
        }
      }

      .content-block-content {
        width: 70%;
      }
    }
  }

  .page-wrap {
    margin-top: 78px;
  }

  /* Collapse padding/margins */
  .container > .row,
  .container-fluid > .row {
    > [class*=col-]:first-child {
      //padding-left: 0;
    }

    > [class*=col-]:last-child {
      //padding-right: 0;
    }
  }

  @media screen and (max-width: 84em) {
    .right-pane {
      background-color: rgba(245, 245, 245, 1);
      position: static;
    }
  }
</style>

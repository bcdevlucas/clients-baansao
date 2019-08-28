<template>
  <Layout>
    <div class="content-wrapper blog-posts blog-post-page">
      <div class="container-fluid">
        <div class="row column-wrapper">
          <div class="col-xl-8">
            <div class="hero-wrapper">
              <div
                v-if="getHeroById('page-hero') !== null"
                class="site-blocks-cover diag-right-up text-shadow"
                :style="`background-image: url(${$page.post.image}); background-position: -180px -380px !important`"
              >
                <div class="container hero-content">
                  <div class="row align-items-center justify-content-center">
                    <div class="col-md-10 text-center">
                      <!--<div class="hero-logo"><span></span></div>-->
                      <span class="sub-text"><strong>Special of the Month</strong></span>
                      <h1>{{ $page.post.title }}</h1>
                      <!--<div v-if="getHeroById('page-hero').description" class="sub-text" v-html="(getHeroById('page-hero').description) ? getHeroById('page-hero').description : ''"></div>-->
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="site-section">
              <div class="container">
                <div class="row align-items-center mb-5 pb-5">
                  <div class="row">
                    <pre>Coming soon, this section isn't pre-rendering correctly...</pre>
                    <!--<content-block-layout
                      className="col-md-12 mb-3 project-entry blog-post blog-post-main full-width"
                      :description="$page.post.content"
                      :image="$page.post.image"
                      :imageAlt="$page.post.caption"
                      :datePublished="datePublished"
                    />-->
                    <!--
                    <content-block-layout
                      className="col-md-12 mb-3 project-entry blog-post blog-post-main full-width"
                      :description="$page.post.content"
                      :image="$page.post.image"
                      :imageAlt="$page.post.caption"
                      :datePublished="datePublished"
                      :cloudinaryImage="$page.post.imageId"
                      cloudName="baansaowanee"
                      cloudFolder="posts"
                    />
                    -->
                  </div>
                </div>
              </div>
            </div>

            <div class="site-section">
              <div class="container-fluid">
                <!--<event-list class="row" />-->
              </div>
            </div>
            <div class="site-section">
              <div class="container-fluid">
                <!--<attraction-list class="row" />-->
              </div>
            </div>
          </div>
          <deal-list class="col-xl-4 right-pane" />
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
  import moment from 'moment';

  //import * as StringUtils from '~/core/utils/StringUtils';

  import SvgBlurSectionBlockLayout from '~/components/layouts/SvgBlurSectionBlockLayout.vue';
  import ContentBlockLayout from '~/components/layouts/ContentBlockLayout.vue';
  import DealList from '~/components/page/deals/DealList.vue';
  import AttractionList from '~/components/page/attractions/AttractionList.vue';
  import EventList from '~/components/page/events/EventList.vue';

  import PostMixin from '~/core/mixins/PostMixin';
  import HeroMixin from '~/mixins/HeroMixin';
  import SectionMixin from '~/mixins/SectionMixin';
  //import TestimonialMixin from '~/core/mixins/TestimonialMixin';

  // Import static data
  import ExploreData from '~/data/Explore.yml';

  export default {
    metaInfo() {
      return {
        title: this.$page.post.title
      };
    },
    components: {
      SvgBlurSectionBlockLayout,
      ContentBlockLayout,
      DealList,
      AttractionList,
      EventList
    },
    mixins: [PostMixin, HeroMixin, SectionMixin],
    data() {
      return {
        // TODO: Require this data format for pages
        pageData: ExploreData,
        pageTitle: ExploreData.title,
        pageSubTitle: ExploreData.subtitle,
      }
    },
    computed: {
      datePublished() {
        return (this.$page && this.$page.post) ? moment(this.$page.post.date, "YYYY-MM-DD").format('MMM Do YYYY') : '';
      },
      pageSectionContent() {
        return (ExploreData.hasOwnProperty('sections')) ? ExploreData.sections : [];
      }
    }
  };
</script>

<page-query>
  query BlogPosts($path: String!) {
    post: blogPost(path: $path) {
      id
      title
      date
      image
      imageId
      caption
      summary
      content
      path
      slug
    }
    posts: allBlogPost {
      edges {
        node {
          id
          title
          date
          image
          imageId
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
              imageId
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
              imageId
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
              imageId
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
              imageId
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
  }
</page-query>

<style lang="scss">
  .full-width .content-block-image {
    float: left;
    width: 33%;
    margin-right: 2rem;
  }

  .blog-posts .content-block-image {
    height: 220px;
  }

  .blog-posts {
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

  .blog-post-page {
    .blog-post-main {
      .content-block-inner {
        border: none;
        box-shadow: none;
      }
    }
  }

  @media screen and (max-width: 84em) {
    .right-pane {
      background-color: rgba(245, 245, 245, 1);
      position: static;
    }
  }
</style>


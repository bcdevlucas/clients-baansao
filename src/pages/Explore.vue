<template>
  <Layout>
    <error-boundary>
    <div class="content-wrapper blog-posts">
      <div class="container-fluid">
        <div class="row column-wrapper">
          <div class="col-xl-8">
            <div class="hero-wrapper">
              <div
                v-if="getHeroById('page-hero') !== null"
                class="site-blocks-cover diag-right-up text-shadow"
                :style="`background-image: url(${getHeroById('page-hero').image});`"
              >
                <div class="container hero-content">
                  <div class="row align-items-center justify-content-center">
                    <div class="col-md-10 text-center hero-text">
                      <!--<div class="hero-logo"><span></span></div>-->
                      <span class="sub-text"><strong>{{ getHeroById('page-hero').subTitle }}</strong></span>
                      <h1>{{ getHeroById('page-hero').title }}</h1>
                      <!--<div v-if="getHeroById('page-hero').description" class="sub-text" v-html="(getHeroById('page-hero').description) ? getHeroById('page-hero').description : ''"></div>-->
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="site-section mt-4" v-if="postsContent.length > 0">
              <div class="container-fluid">
                <div class="row" v-if="postsContent.length > 1">
                  <h3 class="category-title text-center mb-5" style="display: block; width: 100%;">Features of the Month</h3>

                  <content-block-layout
                    v-for="post in featuredContent"
                    :key="post.id"
                    className="col-md-12 mb-3 project-entry blog-post full-width"
                    :title="post.title"
                    :description="post.content"
                    :link="post.path"
                    linkText="Read Article"
                    :image="post.image"
                    :imageAlt="post.caption"
                    :datePublished="post.date"
                    :cloudinaryImage="post.imageId"
                    cloudName="baansaowanee"
                    cloudFolder="posts"
                  />
                </div>
              </div>
            </div>
            <div class="site-section">
              <div class="container-fluid">
                <event-list class="row" />
              </div>
            </div>
            <div class="site-section">
              <div class="container-fluid">
                <attraction-list class="row" />
              </div>
            </div>
          </div>
          <deal-list class="col-xl-4 right-pane" />
        </div>
      </div>
    </div>
    </error-boundary>
  </Layout>
</template>

<script>
  import ErrorBoundary from '~/core/components/ErrorBoundary.vue';
  import DealBlockLayout from '~/components/layouts/DealBlockLayout.vue';
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
    metaInfo: {
      title: "About"
    },
    components: {
      ErrorBoundary,
      ContentBlockLayout,
      DealBlockLayout,
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
        pageSubTitle: ExploreData.subtitle
      }
    },
    computed: {
      pageSectionContent() {
        return (ExploreData.hasOwnProperty('sections')) ? ExploreData.sections : [];
      }
    },
    methods: {
      /*featuredContent() {
        const content = this.$page.posts.edges.map(edge => {
          return edge.node;
        });

        return content;
      }*/
    },
    /*mounted() {
      setTimeout(() => {
        this.$forceUpdate();
      }, 333);
    }*/
  };
</script>

<page-query>
  query BlogPosts {
    posts: allBlogPost {
      edges {
        node {
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
  }
</page-query>

<style lang="scss">
  .full-width .content-block-image {
    float: left;
    width: 33%;
    margin-right: 2rem;
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

    .site-blocks-cover {
       background-position: -180px -440px
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

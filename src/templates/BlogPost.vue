<template>
  <Layout>
    <div class="content-wrapper blog-posts">
      <div class="container-fluid">
        <div class="row column-wrapper">
          <div class="col-md-9">
            <div class="hero-wrapper">
              <div
                v-if="getHeroById('page-hero') !== null"
                class="site-blocks-cover angle text-shadow"
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
                  <div class="col-lg-5 img-years mb-5 mb-lg-0">
                  </div>
                  <div class="col-lg-12 mt-4 ml-auto text-left">
                    <span class="sub-title"></span>
                    <div class="mb-5" v-html="$page.post.content"></div>
                  </div>
                </div>
              </div>
            </div>

            <div class="site-section" v-if="postsContent.length > 0">
              <div class="container">
                <div class="row" v-if="postsContent.length > 1">
                  <h3 class="category-title text-center mb-5" style="display: block; width: 100%;">What's Happening!</h3>

                  <content-block-layout
                    v-for="post in postsContent.slice(0, 3)"
                    :key="post.id"
                    className="col-lg-4 col-md-4 mb-6 project-entry blog-post"
                    :title="post.title"
                    :description="post.summary"
                    :link="post.path"
                    linkText="Read Article"
                    :image="post.image"
                    :imageAlt="post.caption"
                  />
                </div>
              </div>
            </div>
            <div class="site-section" v-if="$page.posts.edges.length > 0">
              <div class="container-fluid">
                <div class="row" v-if="postsContent.length > 1">
                  <h3 class="category-title text-center mb-5" style="display: block; width: 100%;">Popular Attractions</h3>

                  <content-block-layout
                    v-for="post in postsContent.slice(1, postsContent.length)"
                    :key="post.id"
                    className="col-lg-4 col-md-4 mb-6 project-entry blog-post"
                    :title="post.title"
                    :description="post.summary"
                    :link="post.path"
                    linkText="Read Article"
                    :image="post.image"
                    :imageAlt="post.caption"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-3 right-pane">
            <h3 class="category-title text-center mt-5 mb-3" style="display: block; width: 100%;">Great Local Deals</h3>
            <content-block-layout
              v-for="post in postsContent"
              :key="post.id"
              className="col-xs-12 blog-post"
              :title="post.title"
              :description="post.summary"
              :link="post.path"
              :image="post.image"
              :imageAlt="post.caption"
            />
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
  import SvgBlurSectionBlockLayout from '~/components/layouts/SvgBlurSectionBlockLayout.vue';
  import ContentBlockLayout from '~/components/layouts/ContentBlockLayout.vue';

  // TODO: Implement page page that provides data interface?
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
      ContentBlockLayout
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
      },
      postsContent() {
        const content = this.$page.posts.edges.map(edge => {
          return edge.node;
        });

        return content;
      },
    }
  };
</script>

<page-query>
  query BlogPosts($path: String!) {
    post: blogPost(path: $path) {
      title
      image
      content
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
  }
</page-query>

<style lang="scss">
  a, a:hover {
    color: #222;
  }
  .full-width .content-block-image {
    float: left;
    width: 33%;
    margin-right: 2rem;
  }

  .blog-posts .content-block-image {
    height: 220px;
    overflow: hidden;
  }

  .blog-posts {
    background: #fefefe;

    .hero-wrapper {
      margin-left: -15px;
      margin-right: -15px;
      height: auto;
      height: 460px;
    }

    .hero-content {
      height: 100%;
    }

    .site-blocks-cover, .site-blocks-cover .row {
      height: 100%;
      min-height: 0;
    }

    h3 {
      font-size: 1.5rem;
      font-weight: bold;
    }

    .category-title {
      font-size: 2rem;
    }

    p.text-muted {
      color: #444 !important;
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
    //border-left: 2px solid darkgoldenrod;
    height: 100%;

    .blog-post {
      display: flex;
      border-bottom: 1px dotted #909090;
      padding-top: 2rem;
      padding-bottom: 2rem;

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
          width: 100px !important;
          height: 100px !important;
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
</style>


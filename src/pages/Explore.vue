<template>
  <Layout>
    <div class="hero-wrapper">
      <div
        v-if="getHeroById('page-hero') !== null"
        class="site-blocks-cover angle inner-page text-shadow"
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

    <div class="content-wrapper blog-posts">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-8">
            <div class="site-section mt-5" v-if="postsContent.length > 0">
              <div class="container">
                <div class="row">
                  <h3 class="text-center mb-5" style="display: block; width: 100%;">Featured Articles</h3>

                  <content-block-layout
                    :key="postsContent[0].id"
                    className="col-lg-12 col-md-12 mb-6 project-entry full-width"
                    :title="postsContent[0].title"
                    :description="postsContent[0].summary"
                    :link="postsContent[0].path"
                    linkText="Read Article"
                    :image="postsContent[0].image"
                    :imageAlt="postsContent[0].caption"
                  />
                </div>
              </div>
            </div>
            <div class="site-section" v-if="$page.posts.edges.length > 0">
              <div class="container">
                <div class="row" v-if="postsContent.length > 1">
                  <content-block-layout
                    v-for="post in postsContent.slice(1, 3)"
                    :key="post.id"
                    className="col-lg-6 col-md-6 mb-6 project-entry"
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
            <div class="site-section mt-5" v-if="postsContent.length > 0">
              <div class="container">
                <div class="row">
                  <h3 class="text-center mb-5" style="display: block; width: 100%;">Weekly Specials</h3>

                  <content-block-layout
                    :key="postsContent[0].id"
                    className="col-lg-12 col-md-12 mb-6 project-entry full-width"
                    :title="postsContent[0].title"
                    :description="postsContent[0].summary"
                    :link="postsContent[0].path"
                    linkText="Read Article"
                    :image="postsContent[0].image"
                    :imageAlt="postsContent[0].caption"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4 right-pane mt-5">
            <h3 class="text-center mt-5 mb-5" style="display: block; width: 100%;">Last Minute Specials</h3>
            <content-block-layout
              v-for="post in postsContent"
              :key="post.id"
              className="col-xs-12 project-entry"
              :title="post.title"
              :description="post.summary"
              :link="post.path"
              linkText="Read Article"
              :image="post.image"
              :imageAlt="post.caption"
            />
          </div>
        </div>
        <div class="row">
          <div class="site-section" v-if="$page.posts.edges.length > 0">
            <div class="container-fluid">
              <div class="row" v-if="postsContent.length > 1">
                <h3 class="text-center mb-5" style="display: block; width: 100%;">Recent Articles</h3>

                <content-block-layout
                  v-for="post in postsContent.slice(1, postsContent.length)"
                  :key="post.id"
                  className="col-lg-4 col-md-4 mb-6 project-entry"
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
      </div>
    </div>
  </Layout>
</template>

<script>
  import ContentBlockLayout from '~/components/layouts/ContentBlockLayout.vue';

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
  query BlogPosts {
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
  .full-width .content-block-image {
    float: left;
    width: 49%;
    margin-right: 2rem;
  }

  .blog-posts .content-block-image {
    height: 230px;
  }

  .right-pane {
    .content-block-image {
      display: none;
      float: left;
      width: 30%;
      max-height: 100px;
      margin-right: 2rem;
    }
  }
</style>

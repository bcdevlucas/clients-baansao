<template>
  <Layout
    :displayPosts="false"
  >
    <div
      v-if="getHeroById('page-hero') !== null"
      class="site-blocks-cover overlay inner-page"
      :style="`background-image: url(${getHeroById('page-hero').image});`"
      data-aos="fade"
      data-stellar-background-ratio="0.5"
    >
      <div class="container">
        <div class="row align-items-center justify-content-center">
          <div class="col-md-10">
            <span class="sub-text"></span>
            <h1>{{ getHeroById('page-hero').title }}</h1>
          </div>
        </div>
      </div>
    </div>

    <div class="site-section" v-if="$page.posts.edges.length > 0">
      <div class="container">
        <div class="row">
        <div class="col-12 text-center">
          <span class="sub-title">Read our</span>
          <h2 class="font-weight-bold text-black mb-5">Recent Articles</h2>
        </div>
      </div>
        <div class="row">
          <content-block-layout
            v-for="post in $page.posts.edges"
            :key="post.node.id"
            className="col-lg-6 col-md-6 mb-6 project-entry"
            :title="post.node.title"
            :description="post.node.summary"
            :link="post.node.path"
            linkText="Read Article"
            :image="post.node.image"
            :imageAlt="post.node.caption"
          />
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
  import ContentBlockLayout from '~/components/layouts/ContentBlockLayout.vue';
  import TestimonialBlockLayout from '~/components/layouts/TestimonialBlockLayout.vue';

  // TODO: Implement page page that provides data interface?
  import HeroMixin from '~/mixins/HeroMixin';
  import SectionMixin from '~/mixins/SectionMixin';
  import TestimonialMixin from '~/core/mixins/TestimonialMixin';

  // Import static data
  import BlogPostsData from '~/data/BlogPosts.yml';

  export default {
    components: {
      ContentBlockLayout,
      TestimonialBlockLayout,
    },
    metaInfo: {
      title: "Classes"
    },
    mixins: [HeroMixin, SectionMixin, TestimonialMixin],
    data() {
      return {
        pageTitle: BlogPostsData.title,
        pageData: BlogPostsData,
        occasionScript: null,
        activeService: null,
        displayBookingForm: false,
        displayQuestionForm: false
      }
    },
    computed: {
      blogContent() {
        return BlogPostsData;
      }
    },
    mounted() {
    },
    updated() {
    }
  }
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

<style>
  .class-action-buttons {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .class-action-buttons > * {
    flex: 1;
  }

  .owl-content-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  @media screen and (min-width: 768px) {
    .owl-content-wrapper {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: center;
    }
  }

  @media screen and (min-width: 1280px) {
    .class-action-buttons {
      display: block;
    }
  }

  .project-entry {
    text-align: center;
  }

  .project-entry .img-fluid {
    max-height: 40vh;
    object-fit: contain;
  }

  @media screen and (min-width: 1280px) {
    .project-entry .img-fluid {
      max-height: 50vh;
      object-fit: contain;
    }
  }
</style>

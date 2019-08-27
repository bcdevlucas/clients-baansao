<template>
  <div v-if="staticEventsContent instanceof Array && staticEventsContent.length > 1">
    <h3 class="category-title text-center mb-5" style="display: block; width: 100%;">What's Happening</h3>
    <content-block-layout
      v-for="post in staticEventsContent"
      :key="post.id"
      className="col-lg-4 col-md-4 mb-6 project-entry blog-post"
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
</template>

<script>
  import ContentBlockLayout from '~/components/layouts/ContentBlockLayout.vue';

  import PostMixin from '~/core/mixins/PostMixin';

  export default {
    components: {
      ContentBlockLayout
    },
    mixins: [PostMixin]
  }
</script>

<static-query>
  query BlogPosts {
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
  }
</static-query>

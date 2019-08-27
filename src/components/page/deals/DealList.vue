<template>
  <error-boundary>
    <div v-if="staticDealsContent instanceof Array && staticDealsContent.length > 1">
      <h3 class="category-title text-center mt-5 mb-5" style="display: block; width: 100%;">Great Local Deals</h3>
      <deal-block-layout
        v-for="deal in staticDealsContent"
        :key="deal.id"
        className="col-xs-12 blog-post"
        :title="deal.title"
        :description="deal.summary"
        :link="deal.path"
        :image="deal.image"
        :imageAlt="deal.caption"
        :datePublished="deal.date"
        :price="deal.price"
      />
      <!--<deal-block-layout
        v-for="deal in staticDealsContent"
        :key="deal.id"
        className="col-xs-12 blog-post"
        :title="deal.title"
        :description="deal.summary"
        :link="deal.path"
        :image="deal.image"
        :imageAlt="deal.caption"
        :datePublished="deal.date"
        :price="deal.price"
        :cloudinaryImage="deal.imageId"
        cloudName="baansaowanee"
        cloudFolder="posts"
      />-->
    </div>
  </error-boundary>
</template>

<script>
  import ErrorBoundary from '~/core/components/ErrorBoundary.vue';

  import DealBlockLayout from '~/components/layouts/DealBlockLayout.vue';

  import PostMixin from '~/core/mixins/PostMixin';

  export default {
    components: {
      ErrorBoundary,
      DealBlockLayout
    },
    mixins: [PostMixin]
  }
</script>

<static-query>
  query BlogPosts {
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
              price
              path
              slug
            }
          }
        }
      }
    }
  }
</static-query>

<template>
  <Layout>
    <svg-blur-section-block-layout
      class="angle"
      :title="$page.post.title"
      byLine="Experience local culture events."
      :image="$page.post.image"
      aspectRatio="xMidYMid slice"
    />
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
  </Layout>
</template>

<page-query>
  query BlogPost($path: String!) {
    post: blogPost(path: $path) {
      title
      image
      content
    }
  }
</page-query>

<script>
  import SvgBlurSectionBlockLayout from '~/components/layouts/SvgBlurSectionBlockLayout.vue';

  export default {
    metaInfo() {
      return {
        title: this.$page.post.title
      };
    },
    components: {
      SvgBlurSectionBlockLayout
    }
  };
</script>

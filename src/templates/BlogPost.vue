<template>
  <Layout>
    <div class="site-section">
      <div class="container">
        <div class="row align-items-center mb-5 pb-5">
          <div class="col-sm-12">
            <h1 class="my-4 text-center" v-html="$page.post.title"></h1>
          </div>
          <div class="col-lg-5 img-years mb-5 mb-lg-0">
            <img
              :src="$page.post.image"
              alt="Image"
              class="img-fluid"
            />
          </div>
          <div class="col-lg-7 mt-4 ml-auto text-left">
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
export default {
  metaInfo() {
    return {
      title: this.$page.post.title
    };
  }
};
</script>

<template>
  <div class="layout">
    <Header/>
    <div class="page-wrap">
      <slot />

      <div class="site-section" v-if="displayPosts">
        <div class="container">
          <div class="row">
            <div class="col-12 text-center">
              <span class="sub-title">Follow Us On Our Blog</span>
              <h2 class="font-weight-bold text-black mb-5">Recent Posts</h2>
            </div>
          </div>
          <div class="row mb-5">
            <content-block-layout
              v-for="edge in $static.posts.edges" :key="edge.node.id"
              className="col-lg-4 col-md-6 mb-4 mb-lg-0 post-entry"
              :title="edge.node.title"
              :description="edge.node.summary"
              :link="edge.node.path"
              linkText="Read Article"
              :image="edge.node.image"
              :imageAlt="edge.node.caption"
              :datePublished="edge.node.date"
            />
          </div>
          <div class="row mt-5 text-center">
            <div class="col-12">
              <p><a href="/blog-posts" class="btn btn-secondary btn-lg rounded-0">View All Posts</a></p>
            </div>
          </div>
        </div>
      </div>

      <footer class="site-footer">
        <div class="container mt-4 pt-4">
          <div class="row">
            <div class="col-lg-4 mb-5 mb-lg-0">
              <div class="row mb-5">
                <div class="col-md-12">
                  <h3 class="footer-heading mb-4">Navigation</h3>
                </div>
                <div class="col-md-6 col-lg-6">
                  <ul class="list-unstyled">
                    <li><g-link to="/">Home</g-link></li>
                    <li><g-link to="/properties">Properties</g-link></li>
                    <li><g-link to="/services">Services</g-link></li>
                  </ul>
                </div>
                <div class="col-md-6 col-lg-6">
                  <ul class="list-unstyled">
                    <li><g-link to="/blog-posts">Blog</g-link></li>
                    <li><g-link to="/about">About Us</g-link></li>
                    <li><g-link to="/contact">Contact Us</g-link></li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-lg-4"></div>

            <div class="col-lg-4 mb-5 mb-lg-0">
              <div class="row">
                <div class="col-md-12">
                  <h3 class="footer-heading mb-4">Follow Us</h3>

                  <div>
                    <a
                      href="https://www.facebook.com/BaanSaowanee"
                      class="pl-0 pr-3"
                      ><span class="icon-facebook"></span
                    ></a>
                    <a
                      href="https://www.instagram.com/creativeescapesyeg"
                      class="pl-3 pr-3"
                      ><span class="icon-instagram"></span
                    ></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row pt-5 mt-5 text-center"></div>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
  import ContentBlockLayout from '~/components/layouts/ContentBlockLayout.vue';
  import Header from '~/components/Header.vue';

  export default {
    components: {
      ContentBlockLayout,
      Header
    },
    metaInfo: {
      title: 'Baan Saowanee - Ko Samui, Thailand'
    },
    props: {
      displayPosts: Boolean
    },
    mounted() {
    },
  }
</script>

<static-query>
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
</static-query>

<style>
.site-blocks-cover {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}
.site-blocks-cover.overlay {
  position: relative;
}
.site-blocks-cover.overlay:before {
  position: absolute;
  content: "";
  left: 0;
  bottom: 0;
  right: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.4);
}
.site-blocks-cover,
.site-blocks-cover .row {
  min-height: 600px;
  height: calc(100vh);
}
.site-blocks-cover.inner-page,
.site-blocks-cover.inner-page .row {
  min-height: 800px;
  height: calc(100vh);
}
.site-blocks-cover .sub-text {
  font-size: 1.1rem;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.7);
  letter-spacing: 0.2em;
}
.site-blocks-cover h1 {
  /*font-family: "Shadows into Light", cursive;*/
  font-weight: 50;
  color: #fff;
  font-size: 3rem;
}
.site-blocks-cover h1 strong {
  font-weight: 800;
}
@media (min-width: 768px) {
  .site-blocks-cover h1 {
    font-size: 5rem;
    margin-top: 15px;
  }
}
.site-blocks-cover p {
  color: #fff;
  font-size: 1.5rem;
  line-height: 1.5;
}
.site-blocks-cover .intro-text {
  font-size: 16px;
  line-height: 1.5;
}

@media screen and (max-width: 768px) {
  .site-footer {
    padding: 0;
  }

  /* Quick fixes for typography */
  .site-blocks-cover .sub-text {
    font-size: 0.65rem !important;
    white-space: normal;
  }

  .site-blocks-cover h1 {
    font-size: 2.5rem !important;
  }
}

@media screen and (min-width: 768px) {
  .site-footer {
    position: absolute;
    bottom: -40vh;
    width: 100vw;
  }
}


.page-wrap {
  position: relative;
  margin-bottom: -40vh;
}

.page-wrap::after {
  content: "";
  clear: both;
  display: table;
}

  /* Good stuff here, pros on it */
.hero-wrapper {
  height: 100vh;
  overflow: hidden;
}

#bg-video {
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 0;
  object-fit: cover;
}

/* Adjust section z-index to accommodate for video index */
.site-section {
  position: relative;
  z-index: 1;
}

.dark {
  background: black;
}

/*.site-section > .container {
  background: white;
}*/

/* Dark style */
.layout.dark .text-black {
  color: #fff !important;
}

.layout.dark h3 {
  color: white;
}

.layout.dark a {
  color: white;
}

.hero-mask {
  width: 100%;
  mask: url('/images/hero-mask.svg') no-repeat;
  mask-size: cover;
  mask-position: center bottom;
}

.splash {
  mask: url('/images/watercolor-splash.svg') no-repeat;
  transform: rotate(5deg) scale(1.05) !important;
}

.brush-01 {
  mask: url('/images/brush-orange.svg') no-repeat;
  mask-size: contain;
}

.brush-02 {
  mask: url('/images/brush-blue.svg') no-repeat;
  mask-size: contain;
}

.brush-03 {
  mask: url('/images/brush-pink.svg') no-repeat;
  mask-size: contain;
}

.brush-04 {
  mask: url('/images/brush-yellow.svg') no-repeat;
  mask-size: contain;
}

@media screen and (min-width: 1440px) {
  .site-blocks-cover {
    background-position: center center !important;
  }

  .hero-mask {
    mask-position: center 20px;
  }
}

@media screen and (min-width: 1920px) {
  .site-blocks-cover {
    background-position: center center !important;
  }

  .hero-mask {
    mask-position: center -20px;
  }
}

@media screen and (min-width: 2560px) {
  .site-blocks-cover {
    background-position: center center !important;
  }

  .hero-mask {
    mask-position: center -60px;
  }
}
</style>

<template>
  <div class="layout">
    <Header/>
    <div class="page-wrap">
      <div class="moving-palm-left"></div>
      <div class="moving-palm-right"></div>
      <!--<div class="moving-palm-bottom"></div>-->
      <div class="palm-fog animate"></div>

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
        <div class="footer-banner">
          <div class="footer-main">
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
          </div>
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
    width: 100vw;
  }
}


.page-wrap {
  position: relative;
  margin-bottom: -50vh;
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

<style lang="scss">
  /* These are theme & client specific modifications */
  .body {
    overflow-x: hidden !important;
  }

  .content-wrapper {
    overflow: hidden;
    position: relative;
    padding-bottom: 30vh;
  }

  .site-section {
    position: relative;
    z-index: 10;
  }

  .site-footer {
    z-index: 10;
    background: transparent !important;
    a {
      color: white;
    }
  }

  .footer-banner {
    background: url(/images/samui-panorama-adj.png) no-repeat center top;
    padding: 224px 0 0;
    position: relative;
  }
  .footer-main {
    background: url(/images/decorations/grass-tile-cutout.png) repeat-x center top;
    overflow: visible;
    padding: 470px 0 0 0;
  }

  .quick-links {
    padding-top: 11em;
  }

  /* Decorative styles, parallax ,and other goodies */
  .home-banner-container {
    background: url(/images/decorations/palm-bg.svg) 50% 0px / cover no-repeat;
  }

  .palm-box-shadow {
    background-image: radial-gradient(circle, rgba(16, 16, 16, 0.1), rgba(16, 16, 16, 0.2), rgba(16, 16, 16, 0.3));
    height: 100%;
    position: absolute;
    width: 100%;
    z-index: 2
  }

  .moving-palm-left, .moving-palm-right, .moving-palm-bottom, .palm-fog {
    position: absolute;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    display: block
  }

  .moving-palm-left, .moving-palm-right, .moving-palm-bottom {
    background-image: url(/images/decorations/kisspng-arecaceae-leaf-photography-palm-branch-palm-leaf-5a989b2d7c4526.704226721519950637509.png);
    z-index: 3;
    filter: drop-shadow(15px 15px 30px rgba(16,16,16,0.5));
  }

  .palm-fog {
    background-image: url(/images/decorations/fog.png);
    z-index: 2;
    width: 9888px;
    height: 100%;
    bottom: 0;
    left: 0;
    display: none
  }

  .moving-palm-left {
    width: 550px;
    height: 775px;
    top: -350px;
    left: -280px;
    transform: rotate(11deg) scaleX(-1);
  }

  .moving-palm-right {
    width: 550px;
    height: 775px;
    top: -350px;
    right: -280px;
    transform: rotate(-11deg)
  }

  .moving-palm-bottom {
    width: 410px;
    height: 577px;
    bottom: -200px;
    left: -240px;
    transform: rotate(-103deg)
  }

  @media only screen and (min-width: 48em) {
    .palm-box-shadow {
      background-image: radial-gradient(circle, rgba(16, 16, 16, 0.1), rgba(16, 16, 16, 0.2), rgba(16, 16, 16, 0.3));
      box-shadow: inset 20px 20px 100px 90px #101010
    }

    .moving-palm-right {
      width: 758px;
      height: 1068px
    }

    .moving-palm-bottom {
      width: 566px;
      height: 807px;
      bottom: -300px;
      left: -150px
    }
  }

  @media only screen and (min-width: 64em) {
    .palm-box-shadow {
      background-image: radial-gradient(circle, rgba(16, 16, 16, 0.1), rgba(16, 16, 16, 0.2), rgba(16, 16, 16, 0.3))
    }
  }

  @media screen and (min-width: 1280px) {
    @-webkit-keyframes foganimation {
      0% {
        left: 0;
        opacity: 0
      }

      5% {
        opacity: 1
      }

      70% {
        opacity: 1
      }

      100% {
        left: -6888px;
        opacity: 0
      }
    }

    @keyframes foganimation {
      0% {
        left: 0;
        opacity: 0
      }

      5% {
        opacity: 1
      }

      70% {
        opacity: 1
      }

      100% {
        left: -6888px;
        opacity: 0
      }
    }

    .palm-fog.animate {
      display: block;
      -webkit-animation: foganimation 60s 0s;
      -webkit-animation-iteration-count: infinite;
      animation: foganimation 60s 0s;
      animation-iteration-count: infinite;
    }

    .moving-palm-left.animate {
      -webkit-animation: leftpalmsway 14s ease 0s;
      -webkit-animation-iteration-count: infinite;
      animation: leftpalmsway 14s ease 0s;
      animation-iteration-count: infinite;
    }

    @-webkit-keyframes leftpalmsway {
      0% {
        transform: rotate(41deg) scaleX(-1);
        top: -1050px
      }

      20% {
        transform: rotate(39deg) scaleX(-1);
        top: -1030px
      }

      40% {
        transform: rotate(41deg) scaleX(-1);
        top: -1050px
      }

      75% {
        transform: rotate(40deg) scaleX(-1);
        top: -1040px
      }

      100% {
        transform: rotate(41deg) scaleX(-1);
        top: -1050px
      }
    }

    @keyframes leftpalmsway {
      0% {
        transform: rotate(41deg) scaleX(-1);
        top: -1050px
      }

      20% {
        transform: rotate(39deg) scaleX(-1);
        top: -1030px
      }

      40% {
        transform: rotate(41deg) scaleX(-1);
        top: -1050px
      }

      75% {
        transform: rotate(40deg) scaleX(-1);
        top: -1040px
      }

      100% {
        transform: rotate(41deg) scaleX(-1);
        top: -1050px
      }
    }

    .moving-palm-right.animate {
      -webkit-animation: rightpalmsway 14s ease 0s;
      -webkit-animation-iteration-count: infinite;
      animation: rightpalmsway 14s ease 0s;
      animation-iteration-count: infinite
    }

    @-webkit-keyframes rightpalmsway {
      0% {
        transform: rotate(-11deg);
        top: -850px
      }

      20% {
        transform: rotate(-9deg);
        top: -830px
      }

      40% {
        transform: rotate(-11deg);
        top: -850px
      }

      75% {
        transform: rotate(-10deg);
        top: -840px
      }

      100% {
        transform: rotate(-11deg);
        top: -850px
      }
    }

    @keyframes rightpalmsway {
      0% {
        transform: rotate(-11deg);
        top: -850px
      }

      20% {
        transform: rotate(-9deg);
        top: -830px
      }

      40% {
        transform: rotate(-11deg);
        top: -850px
      }

      75% {
        transform: rotate(-10deg);
        top: -840px
      }

      100% {
        transform: rotate(-11deg);
        top: -850px
      }
    }

    .moving-palm-bottom.animate {
      -webkit-animation: bottompalmsway 16s ease 0s;
      -webkit-animation-iteration-count: infinite;
      animation: bottompalmsway 16s ease 0s;
      animation-iteration-count: infinite
    }

    @-webkit-keyframes bottompalmsway {
      0% {
        transform: rotate(-103deg);
        bottom: -850px;
        left: -150px
      }

      25% {
        transform: rotate(-105deg);
        bottom: -870px;
        left: -140px
      }

      50% {
        transform: rotate(-103deg);
        bottom: -850px;
        left: -150px
      }

      75% {
        transform: rotate(-104deg);
        bottom: -860px;
        left: -145px
      }

      100% {
        transform: rotate(-103deg);
        bottom: -850px;
        left: -150px
      }
    }

    @keyframes bottompalmsway {
      0% {
        transform: rotate(-103deg);
        bottom: -850px
      }

      25% {
        transform: rotate(-105deg);
        bottom: -830px
      }

      50% {
        transform: rotate(-103deg);
        bottom: -850px
      }

      75% {
        transform: rotate(-104deg);
        bottom: -840px
      }

      100% {
        transform: rotate(-103deg);
        bottom: -850px
      }
    }
  }

  @media screen and (min-width: 1280px) {
    .moving-palm-left, .moving-palm-right, .moving-palm-bottom {
      opacity: 1;
      /*filter: drop-shadow(2px 4px 6px black);*/
    }

    /* SVG */
    /*.moving-palm-left {
      width: 1188px;
      height: 1678px;
      top: -1050px;
      left: -500px
    }

    .moving-palm-right {
      width: 1188px;
      height: 1678px;
      top: -850px;
      right: -500px
    }

    .moving-palm-bottom {
      width: 1000px;
      height: 1408px;
      bottom: -850px;
      left: -150px
    }*/

    /* Photo */
    .moving-palm-left {
      width: 666px;
      height: 1000px;
      top: -160px;
      left: -150px
    }

    .moving-palm-right {
      width: 666px;
      height: 1000px;
      top: -160px;
      right: -150px
    }

    .moving-palm-bottom {
      width: 666px;
      height: 1000px;
      bottom: -850px;
      left: -150px
    }
  }

  @media only screen and (min-width: 120.0625em) {
    .moving-palm-right {
      right: -230px
    }
  }
</style>

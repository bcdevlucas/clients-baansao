<template>
  <div class="layout">
    <Header :onContactClicked="viewDetail"/>
    <div class="page-wrap">
      <slot />

      <div class="site-section" v-if="displayPosts">
        <div class="container">
          <div class="row">
            <div class="col-12 text-center">
              <span class="sub-title">Follow Us On Our Blog</span>
              <h2 class="font-weight-bold mb-5">Recent Posts</h2>
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

      <content-detail-modal ref="contentDetail" title="Contact Us">
        <div class="container">
          <div id="contact" class="row">
            <div class="col-md-12 col-lg-12">
              <h2 class="site-heading mb-5">
                {{ /*pageSubTitle*/ }}
              </h2>

              <form
                action="https://formspree.io/admin@firebrandwebsolutions.com"
                method="POST"
                class="p-5 bg-white"
              >
                <div class="row form-group">
                  <div class="col-md-12 mb-3 mb-md-0">
                    <label class="font-weight-bold" for="fullname"
                      >Full Name</label
                    >
                    <input
                      type="text"
                      id="fullname"
                      class="form-control"
                      placeholder="Full Name"
                    />
                  </div>
                </div>
                <div class="row form-group">
                  <div class="col-md-12">
                    <label class="font-weight-bold" for="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      class="form-control"
                      placeholder="Email Address"
                    />
                  </div>
                </div>

                <div class="row form-group">
                  <div class="col-md-12">
                    <label class="font-weight-bold" for="email">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      class="form-control"
                      placeholder="Subject"
                      :value="subjectLine"
                    />
                  </div>
                </div>

                <div class="row form-group">
                  <div class="col-md-12">
                    <label class="font-weight-bold" for="message">Message</label>
                    <textarea
                      name="message"
                      id="message"
                      cols="30"
                      rows="5"
                      class="form-control"
                      placeholder="Write your message here."
                    ></textarea>
                  </div>
                </div>

                <div class="row form-group">
                  <div class="col-md-12">
                    <input
                      type="submit"
                      value="Send"
                      class="btn btn-primary rounded-0 btn-lg"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </content-detail-modal>
    </div>

    <!--<div class="orchard-view-scene">
      <div class="scene-outer">
        <img src="/images/orchard-view-3br/20-no-sky.png" style="object-fit: contain; max-width: 100%; position: absolute; z-index: 1; top: 10px;" />
        <div class="scene-inner">
        </div>
      </div>
    </div>-->
  </div>
</template>

<script>
  import ContentDetailModal from '~/core/components/layouts/ContentDetailModal.vue';
  import ContentBlockLayout from '~/components/layouts/ContentBlockLayout.vue';

  import Header from '~/components/Header.vue';

  export default {
    components: {
      ContentDetailModal,
      ContentBlockLayout,
      Header
    },
    metaInfo: {
      title: 'Baan Saowanee - Ko Samui, Thailand'
    },
    props: {
      displayPosts: Boolean
    },
    data() {
      return {
        subjectLine: ''
      }
    },
    methods: {
      setSubjectLine(subjectLine) {
        subjectLine = (typeof subjectLine === 'string') ? subjectLine : '';
        this.$set(this, 'subjectLine', subjectLine);
      },
      viewDetail(activeDetail) {
        if (typeof window !== 'undefined') {
          this.$refs.contentDetail.viewDetail(activeDetail, () => {});
        }
      }
    },
    provide() {
      return {
        defaultLayoutContext: {
          openContactForm: (subjectLine) => {
            this.setSubjectLine(subjectLine);
            this.viewDetail();
          }
        }
      }
    }
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
.site-blocks-cover .sub-text {
  font-size: 1.3rem;
  color: rgba(255, 255, 255, 1);
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
    //position: absolute;
    width: 100%;
  }
}

.page-wrap {
  position: relative;
  margin-bottom: -50vh;
  overflow-x: hidden;
  //overflow-y: hidden;
}

.page-wrap::after {
  content: "";
  clear: both;
  display: table;
}

  /* Good stuff here, pros on it */
.hero-wrapper {
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
    background-position: center center;
  }

  .hero-mask {
    mask-position: center 20px;
  }
}

@media screen and (min-width: 1920px) {
  .site-blocks-cover {
    background-position: center center;
  }

  .hero-mask {
    mask-position: center -20px;
  }
}

@media screen and (min-width: 2560px) {
  .site-blocks-cover {
    background-position: center center;
  }

  .hero-mask {
    mask-position: center -60px;
  }
}
</style>

<style lang="scss">
  /* These are theme & client specific modifications */
  header {
    border-bottom: 1px solid darkgoldenrod; /* TODO: Add this color as theme's gold color */
    box-shadow: 0 1px 3px rgba(16,16,16,0.33333);
  }

  @media screen and (max-width: 40em) {
    .site-navbar-top {
      display: none !important;
    }
  }

  .display-menu .site-navbar-top {
    display: inline-flex !important;
  }

  .body {
    overflow-x: hidden !important;
  }

  .site-section {
    position: relative;
    z-index: 10;
  }

  .site-footer {
    z-index: 10;
    background: #111 !important;
    padding-top: 5rem;
    a {
      color: white;
    }
  }

  .footer-banner {
    //padding: 1024px 0 0;
    position: relative;
    z-index: 1;
  }
  .footer-main {
    overflow: visible;
    //padding: 470px 0 0 0;
    z-index: 3;
    position: relative;
  }

  /*.footer-banner {
    background: url(/images/samui-panorama-adj.png) no-repeat center 170px;
    padding: 1024px 0 0;
    position: relative;
    z-index: 1;
  }
  .footer-main {
    background: url(/images/decorations/grass-tile-cutout.png) repeat-x center top;
    overflow: visible;
    padding: 470px 0 0 0;
    z-index: 3;
    position: relative;
  }*/

  .quick-links {
    padding-top: 11em;
    position: relative;
    z-index: 10;
    top: -180px;
  }

  @media screen and (max-width: 64em) {
    .quick-links {
      padding-top: auto;
      position: relative;
      z-index: 10;
      top: auto;
    }
  }

  @media screen and (min-width: 64em) {
    .site-block-feature:hover {
      background: transparent !important;
      top: -5px;
    }

    /* We've moved the block on top of the hero on desktop... override the color */
    .site-block-feature p,
    .site-block-feature .text-black,
    .site-block-feature .block-icon {
      color: white !important; /* Override existing important */
    }
  }

  /* Decorative styles, parallax ,and other goodies */
  .home-banner-container {
    background: url(/images/decorations/palm-bg.svg) 50% 0px / cover no-repeat;
  }

  .palm-box-shadow {
    /*background-image: radial-gradient(circle, rgba(16, 16, 16, 0.1), rgba(16, 16, 16, 0.2), rgba(16, 16, 16, 0.3));*/
    height: 100%;
    position: absolute;
    width: 100%;
    z-index: 2
  }

  .palm-fog {
    background-image: url(/images/decorations/fog.png);
    z-index: 2;
    width: 9888px;
    height: 100%;
    top: 0;
    left: 0;
    display: none
  }

  .moving-palm-left, .moving-palm-right, .moving-palm-solo, .palm-fog {
    position: absolute;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    display: block
  }

  .moving-palm-left, .moving-palm-right, .moving-palm-solo {
    z-index: 3;
    filter: drop-shadow(15px 15px 30px rgba(16,16,16,0.5));
    background-size: contain;
  }

  .moving-palm-left {
    background-image: url(/images/decorations/palm-branches-left.png);
  }

  .moving-palm-right {
    background-image: url(/images/decorations/palm-branches-right.png);
  }

  .moving-palm-solo {
    background-image: url(/images/decorations/palm-branch.png);
  }

  /* Photo */
  .moving-palm-left {
    width: 593px;
    height: 924px;
    top: -200px;
    left: -210px;
    transform: rotate(0deg);
  }

  .moving-palm-solo {
    width: 566px;
    height: 807px;
    top: -200px;
    left: -130px;
    transform: rotate(-23deg);
  }

  .moving-palm-right {
    width: 549px;
    height: 825px;
    bottom: -150px;
    right: 15px;
    transform: rotate(90deg);
  }

  @media screen and (max-width: 40em) {
    .moving-palm-left {
      top: -400px;
    }

    .moving-palm-solo {
      top: -500px;
    }

    .moving-palm-right {
      bottom: -330px;
      right: -45px;
      transform: rotate(140deg);
    }
  }



  @media only screen and (min-width: 48em) {
    .palm-box-shadow {
      /*background-image: radial-gradient(circle, rgba(16, 16, 16, 0.1), rgba(16, 16, 16, 0.2), rgba(16, 16, 16, 0.3));*/
      box-shadow: inset 20px 20px 100px 90px rgba(16,16,16,0.666667);
    }
  }

  @media only screen and (min-width: 64em) {
    .palm-box-shadow {
      /*background-image: radial-gradient(circle, rgba(16, 16, 16, 0.1), rgba(16, 16, 16, 0.2), rgba(16, 16, 16, 0.3));*/
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
        transform: rotate(0deg);
        top: 0px;
      }

      20% {
        transform: rotate(-2deg);
        top: -20px;
      }

      40% {
        transform: rotate(0deg);
        top: 0px;
      }

      75% {
        transform: rotate(-1deg);
        top: -10px;
      }

      100% {
        transform: rotate(0deg);
        top: 0px;
      }
    }

    @keyframes leftpalmsway {
      0% {
        transform: rotate(0deg);
        top: 0px;
      }

      20% {
        transform: rotate(-2deg);
        top: -20px;
      }

      40% {
        transform: rotate(0deg);
        top: 0px;
      }

      75% {
        transform: rotate(-1deg);
        top: -10px;
      }

      100% {
        transform: rotate(0deg);
        top: 0px;
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
        transform: rotate(90deg);
        bottom: -150px
      }

      20% {
        transform: rotate(92deg);
        bottom: -130px
      }

      40% {
        transform: rotate(90deg);
        bottom: -150px
      }

      75% {
        transform: rotate(91deg);
        bottom: -140px
      }

      100% {
        transform: rotate(90deg);
        bottom: -150px
      }
    }

    @keyframes rightpalmsway {
      0% {
        transform: rotate(90deg);
        bottom: -150px
      }

      20% {
        transform: rotate(92deg);
        bottom: -130px
      }

      40% {
        transform: rotate(90deg);
        bottom: -150px
      }

      75% {
        transform: rotate(91deg);
        bottom: -140px
      }

      100% {
        transform: rotate(90deg);
        bottom: -150px
      }
    }

    .moving-palm-solo.animate {
      -webkit-animation: solopalmsway 16s ease 0s;
      -webkit-animation-iteration-count: infinite;
      animation: solopalmsway 16s ease 0s;
      animation-iteration-count: infinite
    }

    @-webkit-keyframes solopalmsway {
      0% {
        transform: rotate(-23deg);
        top: -200px;
        left: -130px
      }

      25% {
        transform: rotate(-21deg);
        top: -180px;
        left: -120px
      }

      50% {
        transform: rotate(-23deg);
        top: -200px;
        left: -130px
      }

      75% {
        transform: rotate(-22deg);
        top: -190px;
        left: -125px
      }

      100% {
        transform: rotate(-23deg);
        top: -200px;
        left: -130px
      }
    }

    @keyframes solopalmsway {
      0% {
        transform: rotate(-23deg);
        top: -200px;
        left: -130px
      }

      25% {
        transform: rotate(-21deg);
        top: -180px;
        left: -120px
      }

      50% {
        transform: rotate(-23deg);
        top: -200px;
        left: -130px
      }

      75% {
        transform: rotate(-22deg);
        top: -190px;
        left: -125px
      }

      100% {
        transform: rotate(-23deg);
        top: -200px;
        left: -130px
      }
    }
  }

  @media screen and (min-width: 1280px) {
    .moving-palm-left, .moving-palm-right, .moving-palm-solo {
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

    .moving-palm-solo {
      width: 1000px;
      height: 1408px;
      bottom: -850px;
      left: -150px
    }*/
  }

  @media only screen and (min-width: 120.0625em) {
  }

  @media screen and (max-width: 40em) {
    .moving-palm-left,
    .moving-palm-right,
    .moving-palm-solo {
      display: none;
    }

    .angle, .diag-right-up {
      clip-path: none !important;
    }
  }

  .post-entry, .project-entry {
    overflow: visible !important;
  }
</style>

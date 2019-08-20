<template>
  <div class="">
    <!--<div
      v-if="$page.property && getHeroById('page-hero') !== null"
      class="site-blocks-cover inner-page text-shadow"
      :style="`background-image: url(${activeImage.src});`"
    >-->
    <div
      class="site-blocks-cover inner-page text-shadow"
      :style="`background-image: url(${image});`"
    >
      <div class="container hero-content" ref="pageHero">
        <div class="row align-items-center justify-content-center">
          <div class="col-md-10 text-center">
            <slot></slot>
            <span class="sub-text" v-if="subtitle">{{ subtitle }}</span>
            <h1 v-if="title">{{ title }}</h1>
            <div class="sub-text" v-html="(description) ? description : ''"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import HeroMixin from '~/core/mixins/layouts/Hero';

  export default {
    mixins: [
      HeroMixin
    ],
    mounted() {
      /*let hero = this.$refs.heroLayout;
      const speedMultiplier = 0.5;

      window.addEventListener('resize', function(event) {
      });

      let lastScroll = 0;
      window.addEventListener('scroll', (() => {
        //if (Math.abs(lastScroll - window.scrollY) <= 5) return;
        const propValue = `50% -${(window.scrollY * speedMultiplier)}px`;
        hero.style.backgroundPosition = propValue;
      }).bind(this));*/
    }
  };
</script>

<style scoped>
  .hero-section-01-col {
    background-size: cover;
    /* Smooth parallax scrolling */
    background-attachment: fixed;
    background-repeat: no-repeat;
    transition: 0s linear;
    transition-property: background-position;
  }
</style>


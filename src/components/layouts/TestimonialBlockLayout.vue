<template>
  <div v-bind:class="classNameString">
    <img v-bind:src="image" alt="Image" class="img-fluid">
    <h3>{{ reviewedBy }}</h3>
    <span class="sub-title"></span>
    <p>“<em v-html="trimmedTestimonial"></em>”</p>
  </div>
</template>

<script>
  import * as StringUtils from '~/core/utils/StringUtils';

  import TestimonialMixin from '~/core/mixins/layouts/Testimonial';

  export default {
    mixins: [
      TestimonialMixin
    ],
    computed: {
      trimmedTestimonial() {
        return `${StringUtils.shortenText(this.testimonial, 600)}...`;
      }
    }
  }
</script>


<style>
  .testimonial-profile-circle {
    width: 50%;
  }
</style>

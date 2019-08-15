<template>
  <div v-bind:class="classNameString">
    <img v-bind:src="this.image" alt="Image" class="img-fluid">
    <h3>{{ this.reviewedBy }}</h3>
    <span class="sub-title"></span>
    <p>“<em v-html="this.testimonial"></em>”</p>
  </div>
</template>

<script>
  import TestimonialMixin from '~/core/mixins/layouts/Testimonial';

  export default {
    mixins: [
      TestimonialMixin
    ]
  }
</script>


<style>
  .testimonial-profile-circle {
    width: 50%;
  }
</style>

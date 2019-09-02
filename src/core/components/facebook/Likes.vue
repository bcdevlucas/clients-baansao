<template>
  <div :key="Math.random()">
    <!-- This facebook like button only appears when you change the pen's view to 'Debug' -->

    <!-- Options for Facebook buttons:
    data-layout: "standard", "box_count", "button_count", "button"

    data-share="true", "false". True to enable the 'share' button, false to disable the 'share' button.

    Full reference for the options: https://developers.facebook.com/docs/plugins/like-button
    -->

    <!-- Standard 'like' button -->
    <div class="fb-like" :data-href="`https://www.baansaowanee.com/${this.$route.path}`" v-if="dataLayout === 'standard'" data-layout="standard" data-action="like" :data-show-faces="dataShowFaces" :data-share="dataShare"></div>

    <!-- Box count 'like' button -->
    <div class="fb-like" :data-href="`https://www.baansaowanee.com/${this.$route.path}`" v-if="dataLayout === 'box_count'" data-layout="box_count" data-action="like" :data-show-faces="dataShowFaces" :data-share="dataShare"></div>

    <!-- Button count 'like' button -->
    <div class="fb-like" :data-href="`https://www.baansaowanee.com/${this.$route.path}`" v-if="dataLayout === 'button_count'" data-layout="button_count" data-action="like" :data-show-faces="dataShowFaces" :data-share="dataShare"></div>

    <!-- Simple 'like' button -->
    <div class="fb-like" :data-href="`https://www.baansaowanee.com/${this.$route.path}`" v-if="dataLayout === 'button'" data-layout="button" data-action="like" :data-show-faces="dataShowFaces" :data-share="dataShare"></div>
  </div>
</template>

<script>
  export default {
    props: {
      dataLayout: {
        type: String,
        default: 'standard'
      },
      dataShare: {
        type: String,
        default: 'true'
      },
      dataShowFaces: {
        type: String,
        default: 'false'
      }
    },
    mounted() {
      if (typeof window !== 'undefined') {
        setTimeout(this.$forceUpdate, 1000);
      }

      /*(function(d, s, id) {
        let js, fjs = d.getElementsByTagName(s)[0];

        if (d.getElementById(id)) return;
        js = d.createElement(s);
        js.id = id;
        js.src = "";
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));*/
    }
  }
</script>

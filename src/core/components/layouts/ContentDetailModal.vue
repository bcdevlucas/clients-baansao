<template>
  <div ref="contentDetail" class="detailed-content-panel bg-white semi-clear">
    <div class="panel-header py-5">
      <div class="panel-title">
        <h2 v-if="this.title" class="text-center">{{ this.title }}</h2>
      </div>
      <span class="panel-close" @click="hideDetail()"><span class="icon-close"></span></span>
    </div>
    <div class="panel-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import ContentDetailModalMixin from '~/core/mixins/layouts/ContentDetailModal';

  export default {
    mixins: [
      ContentDetailModalMixin
    ]
  }
</script>

<style lang="scss">
  .detailed-content-panel {
    opacity: 1;
    width: 100vw;
    height: calc(100vh - 78px);
    position: fixed;
    /*top: 54px;*/ /* Match header */
    top: 100%;
    left: 0;
    z-index: 5000;
    overflow-y: auto;

    .panel-header {
      display: flex;
      align-items: center;
      position: absolute;
      height: 5rem;
      right: 0;
      z-index: 9999;
      width: 100%;

      .panel-title {
        flex: 1;
        max-width: 100%;
        max-height: 100%;

        > h1,h2,h3,h4,h5,h6 {
          padding: 1rem 0;
          margin: 0;
        }
      }

      .panel-close {
        display: block;
        width: 40px;
        height: 40px;
        flex: 0 0 40px;
        cursor: pointer;
        [class^=icon-] {
          color: darkred;
        }
      }
    }
  }

  @media screen and (min-width: 40em) {
    .detailed-content-panel {
      opacity: 1;
      top: 100%;
      left: 0;
    }
  }
</style>

<template>
  <section class="banner">
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <defs>
        <filter id="blurlayer2" width="120%" height="100%">
          <feColorMatrix
            type="matrix"
            values="
            .7 0 0 0 0
            -0.2 .7 0 0 0
            -.3 0 .7 0 0
            0 0 0 1 0"
          />

          <feGaussianBlur stdDeviation="4" result="blur"/>

          <feImage id="feimage" xlink:href="data:image/svg+xml;charset=utf-8;base64,PHN2ZyB3aWR0aD0iMTAyNCIgaGVpZ2h0PSIzMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+DQoNCiA8Zz4NCiAgPHRpdGxlPmJhY2tncm91bmQ8L3RpdGxlPg0KICA8cmVjdCBmaWxsPSJub25lIiBpZD0iY2FudmFzX2JhY2tncm91bmQiIGhlaWdodD0iNDAyIiB3aWR0aD0iNTgyIiB5PSItMSIgeD0iLTEiLz4NCiA8L2c+DQogPGc+DQogIDx0aXRsZT5MYXllciAxPC90aXRsZT4NCiAgPHBhdGggaWQ9InN2Z18zIiBkPSJtNTEwLDMwMGMtMSwwIC01MDgsLTMgLTUwOCwtM2w1MDgsM3oiIGZpbGwtb3BhY2l0eT0ibnVsbCIgc3Ryb2tlLW9wYWNpdHk9Im51bGwiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2U9Im51bGwiIGZpbGw9IiMwMDAiLz4NCiAgPHBhdGggaWQ9InN2Z181IiBkPSJtMTEuOTQ1LDI5Mi40Njc0OWwwLC0yODQuOTk5OTlsMzE0LDI4NC45OTk5OWwtMzE0LDB6IiBmaWxsLW9wYWNpdHk9Im51bGwiIHN0cm9rZS1vcGFjaXR5PSJudWxsIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlPSJudWxsIiBmaWxsPSIjMDAwIi8+DQogIDxwYXRoIGlkPSJzdmdfNiIgZD0ibTIwMS41NSwxNDIuOTIyNWwxNDUuNDk5OTksLTEzNS41bDE0NS40OTk5OSwxMzUuNWwtMTQ1LjQ5OTk5LDEzNS41bC0xNDUuNDk5OTksLTEzNS41eiIgZmlsbC1vcGFjaXR5PSJudWxsIiBzdHJva2Utb3BhY2l0eT0ibnVsbCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZT0ibnVsbCIgZmlsbD0iIzAwMCIvPg0KICA8cGF0aCB0cmFuc2Zvcm09InJvdGF0ZSgtMTgwIDU0Mi45NDUwMDczMjQyMTg4LDE1MC45Njc0OTg3NzkyOTY4OCkgIiBpZD0ic3ZnXzciIGQ9Im0zODUuOTQ1LDI5My40Njc0OWwwLC0yODQuOTk5OTlsMzE0LDI4NC45OTk5OWwtMzE0LDB6IiBmaWxsLW9wYWNpdHk9Im51bGwiIHN0cm9rZS1vcGFjaXR5PSJudWxsIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlPSJudWxsIiBmaWxsPSIjMDAwIi8+DQogIDxwYXRoIGlkPSJzdmdfMiIgZD0ibTcwMC4yMzU2NSwyOTIuNDY3NDlsMCwtMjg0Ljk5OTk5bDMxNCwyODQuOTk5OTlsLTMxNCwweiIgZmlsbC1vcGFjaXR5PSJudWxsIiBzdHJva2Utb3BhY2l0eT0ibnVsbCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZT0ibnVsbCIgZmlsbD0iIzAwMCIvPg0KIDwvZz4NCjwvc3ZnPg==" x="0%" y="0%" width="100%" height="100%" result="imgmask" preserveAspectRatio="none"/>

          <feComposite in2="imgmask" in="blur" in3="rect2" operator="in" result="comp" />

          <feMerge result="merge">
            <feMergeNode in="SourceGraphic" />
            <feMergeNode in="comp" />
          </feMerge>
        </filter>
      </defs>
      <image filter="url(#blurlayer2)" x="0" width="100%" height="100%" v-bind:xlink:href="image" :preserveAspectRatio="aspectRatio" />
      <!--<image x="0" width="100%" height="100%" v-bind:xlink:href="image" preserveAspectRatio="xMidYMid slice" />-->
    </svg>

    <div class="textcontainer">
      <h1>{{ title }}</h1>
      <p class="byline ">{{ byLine }}.</p>
    </div>
  </section>
</template>

<script>
  export default {
    props: {
      title: String,
      byLine: String,
      image: String,
      aspectRatio: String
    }
  }
</script>

<style lang="scss">
  .banner svg {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 120%;
  }

  .banner {
    height: 100vh;
    outline: 1px yellow dashed;
    margin: 0;
    text-align: center;
    font-family: 'Raleway', sans-serif;
    font-weight: 300;
    overflow: hidden;
    position: relative;

  }

  .textcontainer {
    background: rgba(0, 0, 25, 0);
    font-size: 3em;
    padding: .5em 0;
    position: relative;
    z-index: 1000;
    line-height: .5em;
    letter-spacing: 2px;
    color: rgba(255, 255, 255, 1);
    top: 50%;
    width: 100%;
  }

  h1 {
    font-size: 1em;
    line-height: 1.5em;
    font-weight: 400;
    margin: 0;
    z-index: 100;
    text-shadow: 0 0 8px rgba(0, 0, 0, .3);
    color: white;
  }

  .byline {
    font-size: .3em;
    line-height: 1.5em;
    margin: .75em;
    z-index: 100;
    text-shadow: 0 0 8px rgba(0, 0, 0, .3);
  }
</style>

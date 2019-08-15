<script>
  export default {
    methods: {
      update() {
        let src = typeof this.img.currentSrc !== 'undefined' ? this.img.currentSrc : this.img.src;
        if (this.src !== src) {
          this.src = src;
          this.element.style.backgroundImage = 'url("' + this.src + '")';
        }
      }
    },
    mounted(element) {
      this.element = element;
      this.img = element.querySelector('img');
      this.src = '';

      this.img.addEventListener('load', () => {
          this.update();
      });

      if (this.img.complete) {
          this.update();
      }
    }
  }
</script>

<style>
  [data-responsive-background-image] {
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
  }

  [data-responsive-background-image] img.responsive-background-image {
    display: none;
  }
</style>

/**
 * TODO: This was just ripped out for reference or later use... we're really not using this anywhere anymore.
 */

export default {
  data() {
    return {
      occasionScript: null
    }
  },
  methods: {
    mounted() {
      // Loop over scripts and strip any occasion ones, there's no API to relaunch this script
      for (let idx = 0; idx < document.scripts.length; idx++) {
        if (document.scripts[idx].src === 'https://app.getoccasion.com/p/preboot.js') {
          delete document.scripts[idx];
          console.log('deleted occasion script');
          window.location.reload();
        }
      }

      this.occasionScript = document.createElement('script');
      this.occasionScript.setAttribute('src', 'https://app.getoccasion.com/p/preboot.js');
      this.occasionScript.setAttribute('id', 'bc-occasion-calendar-script');
      document.head.appendChild(this.occasionScript);
    },
    updated() {
      // Loop over scripts and strip any occasion ones, there's no API to relaunch this script
      for (let idx = 0; idx < document.scripts.length; idx++) {
        if (document.scripts[idx].src === 'https://app.getoccasion.com/p/preboot.js') {
          delete document.scripts[idx];
          console.log('deleted occasion script');
          //window.location.reload();
        }
      }

      this.occasionScript = document.createElement('script');
      this.occasionScript.setAttribute('src', 'https://app.getoccasion.com/p/preboot.js');
      document.head.appendChild(this.occasionScript);
    }
  }
}

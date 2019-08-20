/**
 * TODO: This was just ripped out for reference or later use... we're really not using this anywhere anymore.
 */

import marked from 'marked';

export default {
  data() {
    return {
      activeService: null
    }
  },
  methods: {
    setActiveService(id) {
      let service = this.getService(id);
      this.activeService = Object.assign({}, service, {
        descriptionHtml: (service.description) ? marked(service.description) : null
      });

      // Hide Booking / Question forms as they are only relevant to the selected class
      //this.hideBookingForm();
      //this.hideQuestionForm();

      if (typeof window !== 'undefined') {
        //this.stopPrimaryImageRotation();
        //this.startPrimaryImageRotation();

        // TODO: Maybe use some kind of route method?
        window.history.pushState({}, this.activeService.title, `${this.$route.path}?id=${this.activeService.id}`);
        window.setTimeout((() => {
          this.$refs.pageHero.scrollIntoView();
        }).bind(this), 333);
      }
    },
    setActiveServiceByIndex(idx) {
      let service = this.getServiceByIndex(idx);
      this.activeService = Object.assign({}, service, {
        descriptionHtml: service.description //(document) ? marked(service.description) : ''
      });
      // Hide Booking / Question forms as they are only relevant to the selected class
      //this.hideBookingForm();
      //this.hideQuestionForm();

      if (typeof window !== 'undefined') {
        // TODO: Maybe use some kind of route method?
        window.history.pushState({}, this.activeService.title, `${this.$route.path}?id=${this.activeService.id}`);
        window.setTimeout(() => {
          //this.$refs.itemDetails.scrollIntoView();
        }, 333);
      }
    },
    unsetActiveService() {
      this.activeService = null;
    }
  },
  mounted() {
    // Grab the current path
    const {id} = this.$route.query;

    let service = null;
    let matchedServices = this.serviceContent.services.filter((service) => id === service.id);
    if (matchedServices.length > 0) service = matchedServices[0];

    if (service !== null) {
      this.setActiveService(service.id);
    }
  }
}

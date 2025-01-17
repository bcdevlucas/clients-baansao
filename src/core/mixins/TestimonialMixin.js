import marked from 'marked';

// Import static data
import TestimonialData from '~/data/Testimonial.yml';

export default {
  computed: {
    testimonialContent() {
      return TestimonialData;
    }
  },
  methods: {
    getTestimonial(id) {
      if (!id || !this.testimonialContent) return null;

      let items = this.testimonialContent.items || [];

      if (items instanceof Array && items.length > 0) {
        items = items.filter(item => item.id === id);

        if (!items.length > 0) return null;

        return items.pop();
      }

      return null
    },
    getTestimonialByIndex(idx) {
      if (isNaN(idx) || !this.testimonialContent) return null;

      let items = this.testimonialContent.items || [];

      if (items instanceof Array && items.length > idx) {
        return items[idx];
      }

      return null
    },
    getTestimonialsByIndex(startIndex, endIndex) {
      if (!this.testimonialContent) return null;

      let items = this.testimonialContent.items || [];

      startIndex = !isNaN(startIndex) ?  startIndex : 0;
      endIndex = !isNaN(endIndex) ? (endIndex < items.length) ? endIndex : items.length : items.length;

      if (items instanceof Array) {
        return items.slice(startIndex, endIndex + 1); // Slice is not inclusive
      }

      return [];
    },
  }
}

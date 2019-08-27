//import marked from 'marked';

import * as ImageUtils from '~/core/utils/ImageUtils';

export default {
  // TODO: Supply models via props??
  props: {
    price: {
      type: Object,
      default: () => ({
        amount: 0.00,
        currency: ''
      })
    },
    prices: {
      type: Array,
      default: () => ([{
        amount: 0.00,
        currency: ''
      }])
    }
  },
  computed: {
    priceFormatted() {
      return (this.price) ? `$${parseFloat(this.price.amount).toFixed(2)}` : '';
    },

  },
  methods: {
    priceAtFormatted(idx) {
      if (!(this.prices instanceof Array) || !(this.prices.length > idx)) return this.price;
      return (this.prices[idx]) ? `$${parseFloat(this.prices[idx].amount).toFixed(2)}` : '';
    }
  }
};

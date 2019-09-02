<template>
  <div>
    <div class="col-lg-12 ml-auto text-center" v-if="price">
      <span class="sub-title mb-0 price-leading-text">Starting from</span>
      <span class="display-price">{{ formattedPrice }} <small>{{ currency }}<br />per night</small></span>
    </div>

    <div class="class-action-buttons mt-3 mb-0 text-center">
      <button @click="openAirbnbPage.bind(this, link)" class="btn btn-primary btn-lg open-airbnb-page">
        <i class="material-icons">calendar_today</i>&nbsp;<span>Book on Airbnb.com</span>
      </button>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      price: {
        type: Object,
        default: null
      }
    },
    data() {
      return {
        formattedPrice: (this.price && this.price.amount) ? `$${parseFloat(this.price.amount).toFixed(2)}` : '',
        currency: 'USD',
        adults: 1,
        children: 0,
        rooms: 0,
        events: [
          {
            start: '2019-08-27',
            end: '2019-08-27',
            title: 'Need to go shopping',
            content: '<i class="v-icon material-icons">shopping_cart</i>',
            class: 'leisure'
          },
          {
            start: '2019-08-29',
            end: '2019-08-29',
            title: 'Golf with John',
            content: '<i class="v-icon material-icons">golf_course</i>',
            class: 'sport'
          },
          {
            start: '2019-08-30',
            end: '2019-08-30',
            title: 'Dad\'s birthday!',
            content: '<i class="v-icon material-icons">cake</i>',
            class: 'sport'
          }
        ]
      }
    },
    watch: {
      price(newVal) {
        console.log('price updated');
        console.log(newVal);
        this.formattedPrice = (newVal.amount) ? `$${parseFloat(newVal.amount).toFixed(2)}` : '';
      }
    },
    methods: {
      openAirbnbPage(url) {
        if (typeof window !== 'undefined' && typeof url !== 'string') return;
        window.location.href = url;
      }
    }
  }
</script>

<style lang="scss">
  .display-price {
    font-size: 3.5rem;

    small {
      font-size: 1.3rem;
      display: inline-block;
      line-height: 1rem;
    }
  }

  .price-leading-text {
    position: relative;
    top: 1.5rem;
    font-family: 'Calligraffitti', sans-serif;
    text-transform: none;
    font-size: 1.5rem
  }
</style>

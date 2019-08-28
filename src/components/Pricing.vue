<template>
  <div>
    <div class="col-lg-12 ml-auto text-center">
      <span class="sub-title mb-0" style="font-family: 'Calligraffitti', sans-serif; text-transform: none; font-size: 1.5rem">Starting from</span>
      <span class="display-price">{{ priceFormatted }} <small>{{ price.currency }}<br />per night</small></span>
    </div>

    <p class="class-action-buttons mt-5 mb-0 text-center">
      <button @click="openAirbnbPage.bind(this, pageData.link)" class="btn btn-primary btn-lg open-airbnb-page"><i class="material-icons">calendar_today</i>
        <span>Book on Airbnb.com</span>
      </button>&nbsp;
    </p>
  </div>
</template>

<script>
  export default {
    props: {
      price: {
        type: Object,
        default: () => ({
          amount: 0.00,
          currency: ''
        })
      }
    },
    data() {
      return {
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
    computed: {
      priceFormatted() {
        return (this.price) ? `$${parseFloat(this.price.amount).toFixed(2)}` : '';
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
</style>

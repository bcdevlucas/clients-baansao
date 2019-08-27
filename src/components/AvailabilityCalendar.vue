<template>
  <div>
    <div class="col-lg-12 ml-auto text-center">
      <span class="sub-title mb-0" style="font-family: 'Calligraffitti', sans-serif; text-transform: none; font-size: 1.5rem">Starting from</span>
      <span class="font-weight-bold text-black mb-0" style="font-size: 3.5rem;">{{ priceFormatted }}</span><span class="font-weight-bold text-black"> {{ price.currency }} / night</span>
    </div>
    <!--<vue-cal
      default-view="month"
      hide-view-selector
      :time="false"
      :events="events"
      xsmall>
    </vue-cal>
    <div class="selectors" style="display: flex">
      <div class="input-group px-4" style="display: flex; flex-flow: column; text-align: center">
        <label class="font-weight-bold"><small>Adults</small></label>
        <number-input class="number-input" placeholder="0" v-model="adults" :min="1" :max="10" controls center />
      </div>
      <div class="input-group px-4" style="display: flex; flex-flow: column; text-align: center">
        <label class="font-weight-bold"><small>Children</small></label>
        <number-input class="number-input" placeholder="0" v-model="children" :min="1" :max="10" controls center />
      </div>
    </div>-->

    <p class="class-action-buttons mt-5 mb-0 text-center">
      <button @click="openAirbnbPage(pageData.link)" class="btn btn-primary btn-lg open-airbnb-page"><i class="material-icons">calendar_today</i>
        <span>Book on Airbnb.com</span>
      </button>&nbsp;
    </p>

    <p class="class-action-buttons mt-2 text-center">
      <button @click="" class="btn btn-secondary btn-lg ask-question" style="width: 100%"><i class="material-icons">question_answer</i>
        <span>Ask a Question</span>
      </button>
    </p>
  </div>
</template>

<script>
  import VueCal from 'vue-cal';
  import 'vue-cal/dist/vuecal.css';

  export default {
    components: {
      VueCal
    },
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
        if (typeof url !== 'string') return;
        window.location.href = url;
      }
    }
  }
</script>

<style>
  .vuecal__cell-date {
    height: 3rem;
  }
</style>

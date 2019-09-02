<template>
  <button @click="triggerOpenContactForm" class="btn btn-secondary btn-lg ask-question" style="width: 100%"><i class="material-icons">question_answer</i>
    &nbsp;<span>Ask a Question</span>
  </button>
</template>

<script>
  export default {
    inject: ['defaultLayoutContext'],
    props: {
      subject: {
        type: String,
        default: 'Request for information'
      }
    },
    methods: {
      triggerOpenContactForm() {
        if (typeof this.defaultLayoutContext.openContactForm === 'function') {
          this.defaultLayoutContext.openContactForm(this.subject);
        }
      }
    }
  }
</script>

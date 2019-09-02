<template>
  <button @click="triggerOpenContactForm" class="btn btn-secondary btn-lg ask-question" style="width: 100%"><i class="material-icons">question_answer</i>
    <span>Ask a Question</span>
  </button>
</template>

<script>
  export default {
    inject: ['defaultLayoutContext'],
    methods: {
      triggerOpenContactForm() {
        if (typeof this.defaultLayoutContext.openContactForm === 'function') {
          this.defaultLayoutContext.openContactForm();
        }
      }
    }
  }
</script>

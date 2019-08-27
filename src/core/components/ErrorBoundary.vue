<script>
  export default {
    name: 'ErrorBoundary',
    data: () => ({
      error: false
    }),
    errorCaptured (err, vm, info) {
      this.error = true;
      console.log(err);
      console.log(vm);
      console.log(info);
    },
    render (h) {
      return this.error ? h('p', 'Something went wrong') : this.$slots.default[0];
    }
  }
</script>

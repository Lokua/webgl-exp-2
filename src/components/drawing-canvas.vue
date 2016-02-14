<template lang="jade">
  .drawing-canvas
</template>

<script>
  import store from '../app/store'

  export default {
    replace: false,
    ready() { store.actions.renderDrawingElement(this.$el) }
  }
</script>

<style>
</style>

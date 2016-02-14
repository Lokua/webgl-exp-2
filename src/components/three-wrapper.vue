<template lang="jade">
  .three-canvas
</template>

<script>
  import THREE from 'three'
  import Vue from 'vue'
  import Drawing from '../drawing'
  import bus from '../bus'

  function filterParams(params) {
    const values = {}
    Object.keys(params).forEach(key => {
      values[key] = params[key].value
    })
    return values
  }

  export default {
    ready() {
      const drawing = new Drawing()
      this.$el.appendChild(drawing.renderer.domElement)
      bus.on('sliderChange', params => {
        Vue.nextTick(() => drawing.render(filterParams(params)))
      })
    }
  }
</script>

<style>
</style>

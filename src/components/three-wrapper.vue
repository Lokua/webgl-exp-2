<template lang="jade">
  .three-canvas
</template>

<script>
  import THREE from 'three'
  import Vue from 'vue'
  import Drawing from '../app/drawing'
  import bus from '../app/bus'

  function filterParams(params) {
    const values = {}
    Object.keys(params).forEach(key => {
      values[key] = params[key].value
    })
    return values
  }

  export default {
    replace: false,
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

<template lang="jade">
  .control-panel
    label background
    input(
      type='checkbox'
      v-model='background'
      @change='toggleBackground'
    )
    br
    slider(
      v-for='(k, v) in sliders',
      :id='k',
      :label='v.label',
      :min='v.min',
      :max='v.max',
      :step='v.step',
      :value='v.value',
      :change='changeHandler'
    )
    color-sliders
</template>

<script>
  import Slider from './slider'
  import ColorSliders from './color-sliders'
  import store from '../app/store'

  export default {
    replace: false,
    components: {
      Slider,
      ColorSliders
    },
    computed: {
      sliders() {
        return store.state.sliders
      },
      background() {
        return store.state.toggles.background
      }
    },
    methods: {
      changeHandler(id, value) {
        store.actions.setSliderValue(id, value)
      },
      toggleBackground: store.actions.toggleBackground
    }
  }
</script>

<style lang="scss">
  @import '../styles/common';
  .control-panel {
    padding: $unit;
  }
</style>

<template lang="jade">
  .control-panel
    slider(
      v-for='(k, v) in params',
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
      params() {
        return store.state.params
      },
      test() {
        return store.state.test
      }
    },
    methods: {
      changeHandler(id, value) {
        store.actions.setParamValue(id, value)
      }
    }
  }
</script>

<style lang="scss">
  @import '../styles/common';
  .control-panel {
    padding: $unit;
  }
</style>

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
</template>

<script>
  import Slider from './slider'
  import bus from '../bus'

  export default {
    components: {
      Slider
    },
    data() {
      return {
        params: {
          rotateX: { label: 'rotX', value: 0,   min: 0, max: 1,   step: 0.001 },
          rotateY: { label: 'rotY', value: 0,   min: 0, max: 1,   step: 0.001 },
          opacity: { label: 'opac', value: 0.2, min: 0, max: 1,   step: 0.1 },
          z:       { label: 'camZ', value: 5,   min: 0, max: 20,  step: 1 },
          n:       { label: 'iter', value: 10,  min: 0, max: 100, step: 1 }
        }
      }
    },
    methods: {
      changeHandler(id, value) {
        this.params[id].value = value
        bus.trigger('sliderChange', this.params)
      }
    }
  }
</script>

<style lang="scss">
  @import '../fonts';
  @import '../common';

  body {
    font-family: $sans;
  }
</style>

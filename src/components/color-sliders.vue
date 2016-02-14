<template lang="jade">
  .color-sliders
    slider(
      v-for='(k, c) in colors',
      :id='k',
      :label='k',
      :min='0',
      :max='255',
      :step='1',
      :value='c.value',
      :change='changeHandler'
    )
</template>

<script>
  import Slider from './slider'
  import store from '../app/store'

  export default {
    replace: false,
    components: { Slider },
    computed: {
      colors() { return store.state.colors }
    },
    methods: {
      changeHandler(id, value) {
        store.actions.setColorValue(id, value)
      }
    }
  }
</script>

<style lang="scss">
.color-sliders {
  $shade: 900;

  input[type=range] {
    
    &.slider__range--r {
      &::-webkit-slider-runnable-track {
        background: o-md-color('red', $shade - 300);
      }
      &::-webkit-slider-thumb {
        background: o-md-color('red', $shade);
      }
    }

    &.slider__range--g {
      &::-webkit-slider-runnable-track {
        background: o-md-color('green', $shade - 300);
      }
      &::-webkit-slider-thumb {
        background: o-md-color('green', $shade);
      }
    }

    &.slider__range--b {
      &::-webkit-slider-runnable-track {
        background: o-md-color('blue', $shade - 300);
      }
      &::-webkit-slider-thumb {
        background: o-md-color('blue', $shade);
      }
    }
  }
}
</style>

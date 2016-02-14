<template lang="jade">
  .color-selector
    slider(
      v-for='(k, c) in colors',
      :id='k'
      :label='c.label'
      min='0'
      max='255',
      step='1',
      :value='c.value'
      :change='changeHandler'
    )
</template>

<script>
  import Slider from './slider'

  export default {
    replace: false,
    data() {
      return {
        colors: {
          r: { label: 'rotX', value: 127 },
          g: { label: 'rotX', value: 127 },
          b: { label: 'rotX', value: 127 }
        }
      }
    },
    methods: {
      changeHandler(id, value) {
        this.colors[id].value = value
      }
    }
  }

</script>

<style lang="scss">
</style>

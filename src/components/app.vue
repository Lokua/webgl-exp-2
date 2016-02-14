<template lang="jade">
  .app
    control-panel
    three-wrapper
</template>

<script>
  import ControlPanel from './control-panel'
  import ThreeWrapper from './three-wrapper'

  export default {
    components: {
      ControlPanel,
      ThreeWrapper
    }
  }
</script>

<style lang="scss">
  @import '../styles/fonts';
  @import '../styles/common';
  .app {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    font-family: $sans;
  }
  control-panel,
  three-wrapper {
    display: block;
    flex-basis: 50%;
    width: 512px;
    min-width: 512px;
  }
</style>

<template lang="jade">
  .app
    control-panel
    drawing-canvas
</template>

<script>
  import ControlPanel from './control-panel'
  import DrawingCanvas from './drawing-canvas'
  import store from '../app/store'

  export default {
    components: {
      ControlPanel,
      DrawingCanvas
    },
    ready() {
      store.actions.render()
    }
  }
</script>

<style lang="scss">
  @import '../styles/fonts';
  @import '../styles/common';
  body {
    background: o-md-color('grey', 200);
    color: o-md-color('grey', 700);
  }
  .app {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    font-family: $sans;
  }
  control-panel {
    display: block;
    flex-basis: 25%;
    max-width: 512px;
    min-width: 310px;
  }
  drawing-canvas {
    display: block;
  }
</style>

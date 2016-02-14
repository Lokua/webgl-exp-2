<template lang="jade">
  .slider
    label.slider__label {{label}}
    input.slider__range(
      type='range',
      :min='min',
      :max='max',
      :step='step'
      v-model='value'
      @mousedown='mousedown($event)'
      @mousemove='mousemove($event)'
      @mouseup='mouseup($event)'
    )
    label.slider__read {{value}}
</template>

<script>
  export default {
    props: {
      id:     { type: String,   required: true },
      label:  { type: String,   default: 'slider' },
      min:    { type: Number,   default: 0 },
      max:    { type: Number,   default: 100 },
      step:   { type: Number,   default: 1 },
      value:  { type: Number,   default: 50 },
      change: { type: Function, default: () => {}, require: true }
    },
    methods: {
      mousedown(e) {
        this._mousedown = true
        this.change(this.id, this.value)
      },
      mousemove(e) {
        if (this._mousedown) this.change(this.id, this.value)
      },
      mouseup(e) {
        if (this._mousedown) {
          this.change(this.id, this.value)
          this._mousedown = false
        }
      }
    }
  }
</script>

<style lang="scss">
  @import '../common';

  .slider {

    $track-color: o-md-color('grey', 500);
    $knob-color: o-md-color('grey', 800);

    $knob-height: 4px;
    $knob-size: 12px;
    $label-width: 64px;

    display: inline-flex;
    border: 1px dotted red;

    label {
      @include o-ellipsis;
      flex-basis: 32px;
      width: $label-width;
      min-width: $label-width;
      text-align: center;
      font-family: $mono;
    }

    input[type=range] {
      -webkit-appearance: none;
      width: 100%;
    }
    input[type=range]:focus {
      outline: none;
    }
    input[type=range]::-webkit-slider-runnable-track {
      width: 100%;
      height: 2px;
      cursor: pointer;
      background: $track-color;
    }
    input[type=range]::-webkit-slider-thumb {
      @include o-size($knob-size);
      -webkit-appearance: none;
      background: $knob-color;
      cursor: pointer;
      border-radius: 50%;
      margin-top: $knob-size/2.75 * -1;
    }
  }
</style>

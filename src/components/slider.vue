<template lang="jade">
  .slider
    label.slider__label {{label}}
    input.slider__range(
      class='slider__range--{{id}}'
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
    replace: false,
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
          // setting value on mouseup is not smooth
          // this.change(this.id, this.value)
          this._mousedown = false
        }
      }
    }
  }
</script>

<style lang="scss">
  @import '../styles/common';

  .slider {

    $track-color: o-md-color('grey', 800);
    $knob-color: o-md-color('grey', 900);

    $knob-size: 10px;
    $label-width: 48px;

    display: inline-flex;

    label {
      @include o-ellipsis;
      flex-basis: 32px;
      width: $label-width;
      min-width: $label-width;
      font-family: $mono;
      font-size: $unit - 2;
      padding: 0 4px;
      color: o-md-color('grey', 900);
      &:first-child {
        text-align: right;
      }
    }

    input[type=range] {
      -webkit-appearance: none;
      width: 100%;
      background: transparent;
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
      @include o-size($knob-size/2, $knob-size);
      -webkit-appearance: none;
      background: $track-color;
      cursor: pointer;
      // border-radius: 50%;
      margin-top: $knob-size/2.75 * -1;
    }
  }
</style>

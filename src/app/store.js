import Vue from 'vue'
import Vuex from '../vuex/index'
import Drawing from './drawing'

// drawing cannot be kept in vue/vuex.store world,
// "cannot redefine property" etc.
const drawing = new Drawing()

function pickValues(params) {
  const values = {}
  Object.keys(params).forEach(key => values[key] = params[key].value)
  return values
}

const store = new Vuex.Store({

  state: {

    sliders: {
      a: { label: 'a', value: 1, min: 1, max: 50, step: 1 },
      b: { label: 'b', value: 1, min: 1, max: 50, step: 1 },
      c: { label: 'c', value: 1, min: 1, max: 50, step: 1 },

      rotateX: { label: 'rotX', value: 0, min: 0, max: 360, step: 1 },
      rotateY: { label: 'rotY', value: 0, min: 0, max: 360, step: 1 },
      rotateZ: { label: 'rotZ', value: 0, min: 0, max: 360, step: 1 },

      z:       { label: 'camZ', value: 5,   min: 0, max: 1000, step: 0.5 },
      iter:    { label: 'iter', value: 10,  min: 0, max: 100,  step: 1 },
      opacity: { label: 'opac', value: 0.2, min: 0, max: 1,    step: 0.01 },
      offset:  { label: 'offs', value: 0,   min: 0, max: 100,  step: 1 }
    },

    colors: {
      r: { value: 127 },
      g: { value: 127 },
      b: { value: 127 },
    },

    toggles: {
      background: { value: false }
    }
  },

  actions: {

    renderDrawingElement(store, el) {
      el.appendChild(drawing.renderer.domElement)
    },

    setSliderValue({ actions, state }, id, value) {
      state.sliders[id].value = value
      actions.render()
    },

    setColorValue({ actions, state }, id, value) {
      state.colors[id].value = value
      actions.render()
    },

    toggleBackground({ actions, state }) {
      state.toggles.background = !state.toggles.background
      actions.render()
    },

    render({ state }) {
      const params = Object.assign({},
        pickValues(state.sliders),
        { colors: pickValues(state.colors) },
        { background: state.toggles.background }
      )
      console.log(params)
      drawing.render(params)
    }
  }
})

export default store

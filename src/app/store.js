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

    params: {
      rotateX: { label: 'rotX', value: 0,   min: 0, max: 1,   step: 0.01 },
      rotateY: { label: 'rotY', value: 0,   min: 0, max: 1,   step: 0.01 },
      opacity: { label: 'opac', value: 0.2, min: 0, max: 1,   step: 0.01 },
      z:       { label: 'camZ', value: 5,   min: 0, max: 20,  step: 1 },
      n:       { label: 'iter', value: 10,  min: 0, max: 100, step: 1 }
    },

    colors: {
      r: { value: 127 },
      g: { value: 127 },
      b: { value: 127 }
    }
  },

  actions: {

    renderDrawingElement(store, el) {
      el.appendChild(drawing.renderer.domElement)
    },

    setParamValue({ actions, state }, id, value) {
      state.params[id].value = value
      actions.render()
    },

    setColorValue({ actions, state }, id, value) {
      state.colors[id].value = value
      actions.render()
    },

    render({ state }) {
      drawing.render(
        pickValues(state.params),
        pickValues(state.colors)
      )
    }
  },

  // I'm new to redux, flux, and vuex, but what is the point
  // of mutations when I just use actions?
  mutations: {
    SET_PARAM_VALUE(state, id, value) {
    }
  }
})

export default store

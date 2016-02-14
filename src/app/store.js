import Vue from 'vue'
import Vuex from '../vuex/index'

const store = new Vuex.Store({
  state: {
    params: {
      rotateX: { label: 'rotX', value: 0,   min: 0, max: 1,   step: 0.001 },
      rotateY: { label: 'rotY', value: 0,   min: 0, max: 1,   step: 0.001 },
      opacity: { label: 'opac', value: 0.2, min: 0, max: 1,   step: 0.1 },
      z:       { label: 'camZ', value: 5,   min: 0, max: 20,  step: 1 },
      n:       { label: 'iter', value: 10,  min: 0, max: 100, step: 1 }
    }
  },
  actions: {},
  mutations: {}
})

export default store

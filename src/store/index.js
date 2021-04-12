import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    items: [
      { nombre: 'Pasta de dientes', costo: 900, pagado: true},
      { nombre: 'Shampoo', costo: 2500, pagado: false },
      { nombre: 'Cigarrillos', costo: 4500, pagado: true},  
    ],
    nuevonombre: '',
    nuevocosto: '',
    indexreference: ''
  },
  mutations: {
    agregarItem (state) {
        state.items.push({
            nombre: state.nuevonombre, costo: state.nuevocosto, pagado: false,
        });
        state.nuevonombre = ''
        state.nuevocosto = ''
    },
    updateNuevonombre (state, nuevonombre) {
        state.nuevonombre = nuevonombre
    },
    updateNuevocosto(state, nuevocosto) {
        state.nuevocosto = parseInt(nuevocosto)
    },
    updateindexreference (state, index) {
        state.indexreference = parseInt(index)
    },
    delItem (state, indexreference) {
       state.items.splice(indexreference,1)
    },
  },
  actions: {
  },
  modules: {
  },
  getters: {

  }
})

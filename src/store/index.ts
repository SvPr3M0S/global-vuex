import { createStore } from 'vuex'

export default createStore({
  state: {
   counter: 1 //Data
  },
  getters: {
    times2(state) {
      return state.counter * 2//Computed
    }
  },
  mutations: {
    setCounter(state, value) {
      state.counter = value;//set sync
    }
  },
  actions: {
    //set async
  },
  modules: {
    //subdividir the store
  }
})



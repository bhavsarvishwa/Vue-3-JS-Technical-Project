import { createStore } from 'vuex'
import { initialState, selectedColor } from '../data'

const store = createStore({
  modules: {},

  state: () => ({
    upvote: initialState.upvote,
    selectedColor,
  }),

  getters: {},

  mutations: {
    CHANGE_STATE(state, newUpvote) {
      state.upvote = newUpvote
    },

    CHANGE_COLOR(state, newColor) {
      state.selectedColor = newColor
    },
  },

  actions: {
    updateVote({ commit }, newUpvote) {
      commit('CHANGE_STATE', newUpvote)
    },

    changeColor({ commit }, newColor) {
      commit('CHANGE_COLOR', newColor)
    },
  },
})

export default store

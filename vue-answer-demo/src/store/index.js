import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		answeredList: [],
	},
	getters: {
		answeredList: state => state.answeredList,
	},
	mutations: {
		SET_ANSWERED_LIST(state, list) {
			state.answeredList = list
		}
	},
	actions: {
		setAnsweredList({ commit }, list) {
			commit('SET_ANSWERED_LIST', list)
		}
	},
	modules: {
	}
})

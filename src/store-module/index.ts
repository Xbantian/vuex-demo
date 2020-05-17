import Vue from 'vue'
import Vuex from 'vuex'
import a from './modules/a'
import b from './modules/b'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
	modules: {
		a,
		b,
	},
	// strict: debug,
})

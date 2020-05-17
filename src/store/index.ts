import Vue from 'vue'
import Vuex from 'vuex'
const getCurrentUser = (num: number) =>
	new Promise((res, rej) => {
		setTimeout(() => {
			res({
				name: 'bantian',
				num: num ? num : Math.random(),
			})
		}, 3000)
	})
const getOrgConfig = (id = 0) =>
	new Promise((res, rej) => {
		setTimeout(() => {
			res({
				orgName: 'xb',
				num: Math.random(),
			})
		}, 1000)
	})

Vue.use(Vuex)

export default new Vuex.Store({
	state: { count: 0, currentUser: {}, orgConfig: {} },
	getters: {
		//state的计算属性,例如下面这个判断count的奇偶性的值
		isEven: state => {
			return state.count % 2 === 0
		},
	},
	mutations: {
		increment(state, { count = 1 }) {
			//第二个参数可以自定义
			state.count += count
		},
		decrement(state) {
			// 变更状态
			state.count--
		},
		getCurrentUser(state, currentUser) {
			//第二个参数可以自定义
			state.currentUser = currentUser
		},
		getOrgConfig(state, orgConfig) {
			//第二个参数可以自定义
			state.orgConfig = orgConfig
		},
		async mutationsUpdateUser(state, { num = 0 }) {
			const re = await getCurrentUser(num)
			//这里确实回异步执行,但是调用的地方是同步的
			state.currentUser = re as any
		},
	},
	actions: {
		async updateUser({ commit }, { num = 0 }) {
			commit('getCurrentUser', await getCurrentUser(num))
		},
		async updateOrg({ dispatch, commit }) {
			await dispatch('updateUser', {}) // 等待 actionA 完成
			commit('getOrgConfig', await getOrgConfig())
		},
	},
	modules: {},
})

//关于action/mutations
//devtools需要记录state的每一次变更,所以选择在某函数(mutations)执行后,所以mutations必须同步
//不然只能选择劫持state,以检测变更,但这样不明确变更发送的位置等一系列其他原因
//又为了解决异步问题,所以整了个action
//大佬观点:
//https://www.zhihu.com/question/48759748
// 中文翻译可能有些偏差（不是我翻的）。区分 actions 和 mutations 并不是为了解决竞态问题，
//而是为了能用 devtools 追踪状态变化。事实上在 vuex 里面 actions 只是一个架构性的概念，并不是必须的，
//说到底只是一个函数，你在里面想干嘛都可以，只要最后触发 mutation 就行。异步竞态怎么处理那是用户自己的事情。
//vuex 真正限制你的只有 mutation 必须是同步的这一点（在 redux 里面就好像 reducer 必须同步返回下一个状态一样）。
//同步的意义在于这样每一个 mutation 执行完成后都可以对应到一个新的状态（和 reducer 一样），
//这样 devtools 就可以打个 snapshot 存下来，然后就可以随便 time-travel 了。如果你开着 devtool 调用一个异步的 action，
//你可以清楚地看到它所调用的 mutation 是何时被记录下来的，并且可以立刻查看它们对应的状态。其实我有个点子一直没时间做，
//那就是把记录下来的 mutations 做成类似 rx-marble 那样的时间线图，对于理解应用的异步状态变化很有帮助。
